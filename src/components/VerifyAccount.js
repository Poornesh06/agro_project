import React from 'react';

const VerifyAccount = () => {
  return (
    <div className="auth-container">
      <h1>Verify Account</h1>
      <p>
        Code has been sent to <b>johndoe@gmail.com</b>. Enter the code to verify your account.
      </p>
      <form>
        <label>Enter Code</label>
        <input type="text" placeholder="4 Digit Code" required />
        <button type="submit" className="btn">Verify Account</button>
      </form>
      <div className="resend-code">
        <a href="/resend-code">Resend Code</a>
        <p>Resend code in 00:59</p>
      </div>
    </div>
  );
};

export default VerifyAccount;
