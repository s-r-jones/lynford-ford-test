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
            <p>Find a flat surface and scan the floor</p>
          </li>

          <li>
            <span>2</span>
            <img src="camera.png" />
            <p>Aim your camera at the car</p>
          </li>
          <li>
            <span>3</span>
            <img src="power.png" />
            <p>Tap to collect</p>
          </li>

          <li>
            <span>4</span>
            <img src="repeat.png" />
            <p>Win rewards!</p>
          </li>
        </ol>
        <br />
        <p>
          If you qualify for a half-court shot and successfully complete it,
          you’ll win::
        </p>
        <article>
          <img src="truck.png" />
          Lynford Ford
        </article>
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
