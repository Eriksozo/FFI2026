// Tiny helper to render the rich (bold/underline/color) copy strings.
export default function Rich({ html, as: Tag = 'span', className }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
