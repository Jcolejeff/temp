import React, { useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    setOtp(pastedData.split(""));
  };

  const handleDelete = (index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
  };
  return (
    <div className="flex justify-center items-center space-x-2">
      <form action="" onPaste={handlePaste}>
        {otp.map((pin, index) => {
          return (
            <React.Fragment key={index}>
              <input
                type="text"
                key={index}
                maxLength={1}
                value={pin}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => e.key === "Backspace" && handleDelete(index)}
                className="w-12 mr-2 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
              />
              {/* {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-red-500" />
            )} */}
            </React.Fragment>
          );
        })}
      </form>
    </div>
  );
};

export default OtpInput;
