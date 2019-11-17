import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function token(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files/core');
    const sourceParametrizedTemplates = apply(
      sourceTemplates, [template({
        ..._options,
        ...strings,
      })]);
    const rule = mergeWith(sourceParametrizedTemplates);
    return rule(tree, _context);
  };
}
export function core(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files/token');
    const sourceParametrizedTemplates = apply(
      sourceTemplates, [template({
        ..._options,
        ...strings,
      })]);
    const rule = mergeWith(sourceParametrizedTemplates);
    return rule(tree, _context);
  };
}
