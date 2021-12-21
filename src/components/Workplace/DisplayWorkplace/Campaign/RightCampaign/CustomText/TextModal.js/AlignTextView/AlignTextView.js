import BackgroundSquare from "./BackgroundSquare";
import DisplayViewText from "./DisplayViewText";

function AlignTextView({ textCustom }) {
  const centerClass = "flex items-center justify-center";
  const roundedBdClass = "rounded-lg bd-light";
  const roundedBd2CLass = "rounded-lg border-2 border-blue-200";
  const square1Cl = `${centerClass} mt-7`; //h-[342px]
  const square2Cl = `${centerClass} w-36 h-36 ${roundedBdClass}`;
  const square3Cl = `${centerClass} w-20 h-20 bg-blue-100 ${roundedBd2CLass}`;
  const square4Cl = `w-7 h-7 bg-white !rounded-md ${roundedBd2CLass}`;
  return (
    <div className={square1Cl}>
      <DisplayViewText textCustom={textCustom}>
        <div className={square2Cl}>
          <BackgroundSquare>
            <div className={square3Cl}>
              <BackgroundSquare>
                <div className={square4Cl}></div>
              </BackgroundSquare>
            </div>
          </BackgroundSquare>
        </div>
      </DisplayViewText>
    </div>
  );
}

export default AlignTextView;
