const circleBgIcon =
  "flex items-center justify-center mr-2 w-[35px] h-[35px] rounded-full bg-gray-300";

//AccountIcon
const AccountIcon = ({ style, className, onClick }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={style}
      className={className}
      onClick={onClick}
    >
      <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
    </svg>
  );
};

//Create a text story
const CreateATextStory = ({ className, style, setSettingStory, bg }) => {
  return (
    <i
      onClick={() => setSettingStory(true)}
      className={className}
      data-visualcompletion="css-img"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "0px -331px",
        backgroundSize: "auto",
        width: "220px",
        height: "330px",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontStyle: "normal",
            marginBottom: "12px",
            padding: "10.5px",
            fontWeight: "600",
            fontSize: "20px",
            backgroundColor: "#fff",
            borderRadius: "25px",
            boxShadow: "0 1px 5px #797979",
            fontFamily:
              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande,LucidaSans, Arial, sans-serif",
          }}
        >
          Aa
        </div>
        <div
          style={{
            fontSize: "10pt",
            fontWeight: "bold",
            fontStyle: "normal",
            color: "#fff",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
          }}
        >
          Create a Text Story
        </div>
      </div>
    </i>
  );
};

const PlusIcon = ({ className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className}`}
      fill={`${fill || "none"}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

const BellIcon = ({ className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className}`}
      fill={`${fill || "none"}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
};

const SearchIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className} text-gray-400`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

const ArrowIcon = ({ className }) => {
  return (
    <svg
      className={`w-[16px] h-[16px] text-[#ffffffb3] fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
};

const InboxNoBgIcon = ({ className }) => {
  return (
    <svg
      className={`w-[22px] h-[22px] fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M10 3h4v5h3l-5 5-5-5h3v-5zm8.546 0h-2.344l5.467 9h-4.669l-2.25 3h-5.5l-2.25-3h-4.666l5.46-9h-2.317l-5.477 8.986v9.014h24v-9.014l-5.454-8.986z" />
    </svg>
  );
};

const CampaignNoBgIcon = ({ className }) => {
  return (
    <svg
      className={`w-[23px] h-[23px] fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
    </svg>
  );
};

const DashboardNoBgIcon = ({ className }) => {
  return (
    <svg
      className={`w-[23px] h-[23px] fill-current ${className}`}
      focusable="false"
      viewBox="0 0 22 24"
      aria-hidden="true"
      data-testid="DashboardCustomizeIcon"
      tabIndex="-1"
      title="DashboardCustomize"
    >
      <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
    </svg>
  );
};

const DashboardIcon = ({ className }) => {
  return (
    <div className={`${circleBgIcon} ${className} `}>
      <svg
        className={`w-[23px] h-[23px]`}
        focusable="false"
        viewBox="0 0 22 24"
        aria-hidden="true"
        data-testid="DashboardCustomizeIcon"
        tabIndex="-1"
        title="DashboardCustomize"
        // fill="white"
      >
        <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
      </svg>
    </div>
  );
};

const LogOutIcon = () => {
  return (
    <div className={circleBgIcon}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/lUeP8pN1WpZ.png)",
          backgroundPosition: "0px -46px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

export {
  LogOutIcon,
  DashboardIcon,
  DashboardNoBgIcon,
  CampaignNoBgIcon,
  InboxNoBgIcon,
  ArrowIcon,
  SearchIcon,
  BellIcon,
  PlusIcon,
  AccountIcon,
  CreateATextStory,
};
