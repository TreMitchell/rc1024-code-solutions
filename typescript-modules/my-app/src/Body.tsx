// Imported title, mid, and bottom text section into the file
import { TitleSection } from './TitleSection';
import { MidTextSection } from './MidTextSection';
import { BottomTextSection } from './BottomTextSection';

export function Body() {
  return (
    <>
      <TitleSection />
      <MidTextSection />
      <BottomTextSection />
    </>
  );
}
