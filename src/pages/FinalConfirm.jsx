import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FinalConfirm = () => {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const getUrlParam = new URLSearchParams(window.location.search);

  const orderId = getUrlParam.get("merchantOrderId");

  const [formData, setFormData] = useState({
    photo: null,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("orderId", orderId);
    form.append("photo", formData.photo);

    console.log(form);
    try {
      const response = await axios.post(
        "https://api.ozzy.today/transactions/transactionImage",
        form
      );

      console.log(response);
      if (response.status === 200) {
        console.log("Data sent successfully");
        nav("/ThankYou");
      } else {
        console.error("Failed to send data to the API");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // for initial post id data

  const postOrderId = async () => {
    try {
      const response = await axios.post(
        "https://api.ozzy.today/transactions/getOdUser",
        {
          orderId: orderId,
        }
      );
      // console.log(response);
      if (response.status === 200) {
        console.log("OrderId get successfully");
        setUserInfo(response?.data?.result?.data?.customer_id);
      } else {
        console.error("Failed to send the orderId");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // console.log(userInfo);

  useEffect(() => {
    postOrderId();
    toast.success('Payment Successful')
  }, [orderId]);

  return (
    <div className="bg-black text-gray-600 flex h-[100vh] justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white h-full w-full lg:w-[60%] p-5 sm:p-10 flex flex-col  items-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full gap-3 justify-between"
        >
          <div className="p-3 bg-green-500 text-white">
            Thank You For Your Purchase. Please submit the confirmation to claim
            your tickets.
          </div>
          {/* title info  */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-4xl font-bold">Confirmation</h2>
            <div className="flex flex-col gap-10 text-lg font-bold">
              <h1>
                Name :{" "}
                <span className="text-base font-medium">
                  {userInfo?.bank_acc_name}
                </span>
              </h1>
              <h1>
                Phone :{" "}
                <span className="text-base font-medium">
                  {userInfo?.phone_number}
                </span>
              </h1>
              <h1>
                Email :{" "}
                <span className="text-base font-medium">
                  {userInfo?.user_email}
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-xl font-bold">
                Transaction Screenshot:
              </label>
              <input
                className="inputForm bg-slate-200"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>

          {/* button  */}
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 sm:p-4 sm:text-lg p-3 rounded-md text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalConfirm;
