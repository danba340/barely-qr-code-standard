import QrBit from './QrBit';
export default function QrChar({ bits, charIndex }) {
  return bits.map((bit, index) => (
    <QrBit key={charIndex + index} value={bit} />
  ));
}
