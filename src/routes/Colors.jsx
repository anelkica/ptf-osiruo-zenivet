import Header from "../components/Header";

const colors = [
  '#504B38',
  '#B9B28A',
  '#EBE5C2',
  '#A31D1D',
  '#843b62',
  '#f1c40f',
  '#6B6755',
  '#FFFFFF',
];

const Colors = () => {
  return (
    <>
    <Header />
    <div style={styles.container}>
      <h2 style={styles.title}>Color Palette</h2>
      <div style={styles.grid}>
        {colors.map((color) => (
          <div key={color} style={{ ...styles.colorBox, backgroundColor: color }}>
            <span style={{ ...styles.label, color: getTextColor(color) }}>{color}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const getTextColor = (hex) => {
  const c = hex.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186 ? '#000' : '#fff';
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '1rem',
  },
  colorBox: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    paddingBottom: '8px',
  },
  label: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '14px',
  },
};

export default Colors;