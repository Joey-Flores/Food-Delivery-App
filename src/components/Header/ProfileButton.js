import GraySquare from "../ResuedComponents/GraySquare/GraySquare";

function ProfileButton() {
  return (
    <div>
      <GraySquare>
        <span style={{ color: "#4E60FF" }}>
          <i class="fa-solid fa-user"></i>
        </span>
      </GraySquare>
    </div>
  );
}

export default ProfileButton;
