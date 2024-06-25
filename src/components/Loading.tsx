interface Props {
  onStartButtonClick: () => void;
  camKitLoaded: boolean;
}

export const Loading = ({ onStartButtonClick, camKitLoaded }: Props) => {
  return (
    <div className="loading">
      <section>
        <h2>How to use AR</h2>
        <ol type="1">
          <li>
            <span>1</span>
            <img src="magnifying-glass.png" />
            <p>enable motion permission</p>
          </li>

          <li>
            <span>2</span>
            <img src="camera.png" />
            <p>Aim your phone camera at the correct images</p>
          </li>
          <li>
            <span>3</span>
            <img src="tap.png" />
            <p>Solve the puzzel!</p>
          </li>
        </ol>
        <br />

        <button
          disabled={!camKitLoaded}
          onClick={() => {
            onStartButtonClick();
          }}
        >
          Start
        </button>
      </section>
    </div>
  );
};
