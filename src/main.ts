import { Plugin } from 'obsidian';

export default class EmacsKeymap extends Plugin {
    async onload() {
        CodeMirror.keyMap.emacsy['Alt-F'] = 'goWordRight';
        CodeMirror.keyMap.emacsy['Alt-B'] = 'goWordLeft';
        CodeMirror.keyMap.emacsy['Alt-D'] = 'delWordAfter';
    }

    async onunload() {
        delete CodeMirror.keyMap.emacsy['Alt-F']
        delete CodeMirror.keyMap.emacsy['Alt-B']
        delete CodeMirror.keyMap.emacsy['Alt-D']
    }
}
