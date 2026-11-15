import logo from "../assets/images/logo.png";
//Component to display the heading logo
export default function NavBar() {
  return (
    <div>
      <img src={logo} alt="logo" height={100} width={180} />
    </div>
  );
}
