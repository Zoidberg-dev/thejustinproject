import {
    Compiler,
    InitAPI,
    CompilerContext,
    ActionReturnType
  } from '@bit/bit.envs.common.compiler-types';
  import { compile } from './compile';
  export class SvelteCompiler implements Compiler {
    init(ctx: { api: InitAPI }) {
      return {
        write: true
      };
    }
    
    getDynamicPackageDependencies(
      ctx: CompilerContext, name?: string) 
     { 
       return {};
     }
    async action(ctx: CompilerContext): Promise<ActionReturnType> {
      const dists = await compile(ctx.files, ctx.context.rootDistDir);
      return { dists };
    }
  }

export function compile(
    files: Vinyl[],
    distPath: string
  ): Promise<Vinyl[]> {
    if (files.length === 0) {
      return Promise.resolve([]);
    }
    if (!fs.existsSync(distPath)) {
      console.warn('Path does not exist. Automatically generating path');
      fs.mkdirSync(distPath);
  }
    return new Promise(resolve => {
      compileSvelteFiles(files, distPath);
      resolve(getVinylFiles(distPath));
    });
  }

  function compileSvelteFiles(
    files: Vinyl[], 
    distPath: string
  ) {
    files.forEach(file => {
      const source = fs.readFileSync(file.path, 'utf-8');
      const result = svelte.compile(source, {});
      const fileNamePathParts = file.path.split('/');
      const fileName = fileNamePathParts[
         fileNamePathParts.length - 1
      ];
      const fileDistPath = path.resolve(distPath + '/' + fileName);
      fs.writeFileSync(fileDistPath, result.js.code);
    });
  }

  function getVinylFiles(distPath: string): Vinyl[] {
    const outputFiles = [];
    fs.readdirSync(distPath).forEach(name => {
      const fileDistPath = distPath + '/' + name;
      const fileContent = fs.readFileSync(fileDistPath);
      
      outputFiles.push(
        new Vinyl({
          contents: fileContent,
          base: distPath,
          path: path.join(distPath, name),
          basename: replaceSvelteExtension(name)
       })
     );
    });
    
    return outputFiles;
  }