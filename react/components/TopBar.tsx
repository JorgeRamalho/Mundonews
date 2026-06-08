import { getCurrentDateFormatted } from '@js/utils';
import { BRAND_EMOJI } from '@js/brand';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <span className="top-bar__date">
          <span className="top-bar__emoji" aria-hidden="true">{BRAND_EMOJI.calendar}</span>
          {getCurrentDateFormatted()}
        </span>
        <span className="top-bar__live">
          <span className="top-bar__live-dot" aria-hidden="true" />
          <span className="top-bar__emoji" aria-hidden="true">{BRAND_EMOJI.live}</span>
          Cobertura em tempo real
        </span>
      </div>
    </div>
  );
}
