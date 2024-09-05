import React from 'react';
import parse from 'html-react-parser';

export default function TrainingHtml({content}) {
  return (
    <article className="text-slate-700">
    {/* ACTUAL BLOG */}
    {parse(`${content}`)}
    </article>
  );
}
