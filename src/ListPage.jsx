import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8080');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://localhost:8080/${id}`, { method: 'DELETE' });
      // ลบข้อมูลจาก state
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return (
    <div>
      <h1>รายการข้อมูล</h1>
      <Link to="/input">
        <button>เพิ่มข้อมูล</button>
      </Link>
      <table>
        <thead>
          <tr>
            {/* หัวข้อตาราง */}
            <th>ชื่อ</th>
            {/* เพิ่ม field ต่าง ๆ ตามที่คุณต้องการ */}
            <th>การกระทำ</th>
          </tr>
        </thead>
        <tbody>
          {/* แสดงรายการ record */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              {/* เพิ่มข้อมูล field อื่น ๆ ตามที่คุณต้องการ */}
              <td>
                <Link to={`/input/${item.id}`}>
                  <button>แก้ไข</button>
                </Link>
                <button onClick={() => handleDelete(item.id)}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;
