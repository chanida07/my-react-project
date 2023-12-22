import React from 'react';
import { Link } from 'react-router-dom';

const InputPage = () => {
  return (
    <div>
      <h1>หน้า Input Form</h1>
      {/* ช่องกรอกข้อมูลแต่ละ field */}
      <form>
        <label>
          ชื่อ:
          <input type="text" name="name" />
        </label>
        {/* เพิ่มช่องกรอกเพิ่มเติมตามที่คุณต้องการ */}
        <br />
        <Link to="/">
          <button type="button">กลับ</button>
        </Link>
      </form>
    </div>
  );
};

export default InputPage;
