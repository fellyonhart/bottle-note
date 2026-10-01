import { useState } from "react";
import "./surat.css";

const letterText = `Do you remember when we first started talking? That was when I
began to fall for you, but I never said anything because I didn't think that 
was the right way to go about it. So, I kept those feelings to myself until now, 
when I’ve finally found the courage to speak up. Yes, 
I really do like you I love your beautiful eyes and your gentle nature. 
It might be that I just feel comfortable around you, but... well, I really do like you.`;

const reflections = [
  "Siapa orang yang bisa membuat mu nyaman sejauh ini?",
  "If i told you i loved you, would you feel the same way?",
  "Apa hal yang biasanya kamu pikirkan saat di sekolah?"
];

function downloadLetter() {
  const file = new Blob([letterText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = "surat-dari-botol.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showReflections, setShowReflections] = useState(false);

  function closeLetter() {
    setIsOpen(false);
    setShowReflections(false);
  }

  return (
    <main className="page-shell">
      <header className="masthead">
        <p className="eyebrow">CATATAN DARI LAUT</p>
        <span className="issue-mark">
          NUMB<span aria-hidden="true">/</span> UNTUKMU
        </span>
      </header>

      <section className="experience" aria-labelledby="page-title">
        <div className="intro">
          <p className="overline">SEBUAH PESAN MENUNGGU</p>
          <h1 id="page-title">Surat dari Botol</h1>
          <p className="lede">
            Barangkali kata-kata ini datang tepat pada waktunya.
          </p>
        </div>

        {!isOpen ? (
          <div className="discovery">
            <button
              className="bottle-button"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Buka surat di dalam botol"
            >
              <span className="bottle" aria-hidden="true">
                <span className="bottle-cork" />
                <span className="bottle-neck" />
                <span className="bottle-body">
                  <span className="bottle-note" />
                </span>
              </span>
              <span className="open-prompt">
                Buka botol <span aria-hidden="true">↗</span>
              </span>
            </button>
            <p className="discovery-note">
              Satu surat kecil, untuk dibaca perlahan.
            </p>
          </div>
        ) : (
          <article className="letter" aria-label="Isi surat">
            <div className="letter-topline">
              <span>SURAT YANG DITEMUKAN</span>
            </div>
            <div className="letter-copy">
              <p className="salutation">For.......,</p>
              <p>
                Do you remember when we first started talking? That was when I
                began to fall for you, but I never said anything because I
                didn't think that was the right way to go about it. So, I kept
                those feelings to myself until now,
              </p>
              <p>
                when I’ve finally found the courage to speak up. Yes, I really
                do like you I love your beautiful eyes and your gentle nature.
                It might be that I just feel comfortable around you, but...
                well, I really do like you.
              </p>
              <p className="signoff">
                Semoga hari ini terasa sedikit lebih ringan.
              </p>
            </div>

            {showReflections && (
              <section className="reflections" aria-label="Pertanyaan refleksi">
                <h2>Untuk direnungkan</h2>
                <ol>
                  {reflections.map((reflection) => (
                    <li key={reflection}>{reflection}</li>
                  ))}
                </ol>
              </section>
            )}

            <div className="letter-actions">
              <button
                className="text-button"
                type="button"
                onClick={downloadLetter}
              >
                Unduh surat
              </button>
              <button
                className="text-button"
                type="button"
                onClick={() => setShowReflections((visible) => !visible)}
                aria-expanded={showReflections}
              >
                {showReflections
                  ? "Sembunyikan refleksi"
                  : "Pertanyaan refleksi"}
              </button>
              <button
                className="close-button"
                type="button"
                onClick={closeLetter}
              >
                Tutup kembali
              </button>
            </div>
          </article>
        )}
      </section>

      <footer className="page-footer">
        <span>AMBIL WAKTU SEJENAK</span>
        <span>LANJUTKAN SAAT SIAP</span>
      </footer>
    </main>
  );
}

export default App;
