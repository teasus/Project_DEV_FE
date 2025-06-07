// MonacoEditor.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';


self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: string, label: string) {
    if (label === 'json') return './json.worker.bundle.js';
    if (['css', 'scss', 'less'].includes(label)) return './css.worker.bundle.js';
    if (['html', 'handlebars', 'razor'].includes(label)) return './html.worker.bundle.js';
    if (['typescript', 'javascript'].includes(label)) return './ts.worker.bundle.js';
    return './editor.worker.bundle.js';
  },
};

export const MonacoEditor: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (divEl.current) {
      editorRef.current = monaco.editor.create(divEl.current, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: 'typescript',
        theme: 'vs-dark',
      });
    }

    return () => {
      editorRef.current?.dispose();
    };
  }, []);

  return <div ref={divEl} className="w-full h-[500px]" />;
};
