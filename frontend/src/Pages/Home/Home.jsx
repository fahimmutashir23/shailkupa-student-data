import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "../../assets/ShailkupaLogo.png";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [institute, setInstitute] = useState(null);
  const [blood, setBlood] = useState(null);
  const [gender, setGender] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const union = e.target.union.value;
    const addressShailkupa = e.target.addressShailkupa.value;
    const addressDhaka = e.target.addressDhaka.value;
    const privet = e.target?.privet?.value;
    const subject = e.target.subject.value;
    const session = e.target.session.value;
    const occupation = e.target.occupation.value;

    const info = {
      name,
      phone,
      email,
      union,
      addressShailkupa,
      addressDhaka,
      institute,
      privet,
      subject,
      session,
      occupation,
      blood,
      gender,
    };

    const res = await axios.post(
      "https://shailkupa-six.vercel.app/users",
      info
    );

    if (res.data.status === 400) {
      toast.success(res.data.message);
      setLoader(false);
    }
    if (res.data.status === 200) {
      toast.success(res.data.message);
      e.target.reset();
      setLoader(false);
    }
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto px-1 py-4">
        <div className="flex justify-center">
          <img src={logo} className="w-1/5 lg:w-1/12" alt="" />
        </div>
        <h2 className="text-3xl text-green-400 font-medium font_title text-center mb-1">
          Student Association of Shailkupa in Dhaka
        </h2>
        <hr />
        <h4 className="text-xl text-green-400 font-medium font_title text-center mt-3 border py-1">
          Member Collection Form
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-2 mt-4">
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Full Name
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Phone
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="phone"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Email
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Gender
                <span className="text-red-400 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <Select required onValueChange={(value) => setGender(value)}>
                <SelectTrigger className="bg-gray-400/40 text-white py-1 focus:ring-0 px-2 focus:border w-full focus:outline-none border border-black rounded-sm">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800/90 text-white">
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Male"}
                  >
                    Male
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Female"}
                  >
                    Female
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Others"}
                  >
                    Others
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Address in Shailkupa
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="addressShailkupa"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Union
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="union"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Address in Dhaka
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="addressDhaka"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
                required
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Blood Group
                <span className="text-red-400 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <Select required onValueChange={(value) => setBlood(value)}>
                <SelectTrigger className="bg-gray-400/40 text-white py-1 focus:ring-0 px-2 focus:border w-full focus:outline-none border border-black rounded-sm">
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800/90 text-white">
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"A+"}
                  >
                    A+
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"A-"}
                  >
                    A-
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"B+"}
                  >
                    B+
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"B-"}
                  >
                    B-
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"AB+"}
                  >
                    AB+
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"AB-"}
                  >
                    AB-
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"O+"}
                  >
                    O+
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"O-"}
                  >
                    O-
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Institute
                <span className="text-red-400 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <Select required onValueChange={(value) => setInstitute(value)}>
                <SelectTrigger className="bg-gray-400/40 text-white py-1 focus:ring-0 px-2 focus:border w-full focus:outline-none border border-black rounded-sm">
                  <SelectValue placeholder="Select Institute" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800/90 text-white">
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Dhaka University"}
                  >
                    Dhaka University
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Jagannath University"}
                  >
                    Jagannath University
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Jahangirnagar University"}
                  >
                    Jahangirnagar University
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Dhaka College"}
                  >
                    Dhaka College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Titumir Govt. College"}
                  >
                    Titumir Govt. College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Govt. Bangla College"}
                  >
                    Govt. Bangla College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Eden Mohila College"}
                  >
                    Eden Mohila College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Begum Badrunnesa Government Girls College"}
                  >
                    Begum Badrunnesa Government Girls College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Government Shaheed Suhrawardy College"}
                  >
                    Government Shaheed Suhrawardy College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Kabi Nazrul Government College"}
                  >
                    Kabi Nazrul Government College
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"Privet"}
                  >
                    Privet University
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-500 hover:cursor-pointer"
                    value={"National"}
                  >
                    Under National University
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {institute === "Privet" || institute === "National" ? (
              <div className="col-span-12 lg:col-span-6">
                <label className="font-semibold text-slate-200">
                  Your University / College
                  <span className="text-red-500 ml-1 text-xs">
                    (required)
                  </span>{" "}
                </label>
                <input
                  type="text"
                  name="privet"
                  className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                  placeholder="Type Here"
                  required
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Subject
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="subject"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Your Session
                <span className="text-red-500 ml-1 text-xs">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="session"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label className="font-semibold text-slate-200">
                Current Occupation
                <span className="text-red-500 ml-1 text-xs">
                  (if needed)
                </span>{" "}
              </label>
              <input
                type="text"
                name="occupation"
                className="bg-gray-400/40 text-white py-1 focus:ring-0 px-4 focus:border w-full focus:outline-none border border-black"
                placeholder="Type Here"
              />
            </div>
          </div>
          <div className="mt-2">
            <button
              disabled={loader === true}
              type="submit"
              className="bg-red-700 py-1 px-4 text-white font-semibold w-full"
            >
              {loader ? "loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
