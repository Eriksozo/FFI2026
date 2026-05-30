import Rich from './Rich';
import WistiaPlayer from './WistiaPlayer';
import { STUDENTS } from '../lib/content';

export default function StudentsVideo() {
  return (
    <section className="section section--black">
      <div className="container stack">
        <Rich as="h2" className="h-section" html={STUDENTS.title} />
        <div className="video-wrap video-wrap--portrait">
          <WistiaPlayer mediaId="aldixiwei3" padding="177.78%" />
        </div>
        <a className="btn" href="#compra">COMECE AGORA</a>
      </div>
    </section>
  );
}
