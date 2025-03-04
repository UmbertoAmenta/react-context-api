import Alert from "../components/Alert";

export default function HomePage() {
  return (
    <>
      <div className="homepage container">
        <h2>Benvenuto nipotinə!</h2>
        <Alert>
          <p>
            <strong>Work in progress</strong>:
            <br />
            ti chiediamo un po di pazienza, stiamo lavorando sul sito e sui
            maglioni, che fa ancora freddo. Inoltre a breve lavoreremo sul
            database per le nostre, ma anche vostre, ricette.
          </p>
        </Alert>
      </div>
    </>
  );
}
