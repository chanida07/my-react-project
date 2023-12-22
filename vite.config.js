// ประกาศ apiUrl ที่ถูกต้อง
const apiUrl = 'https://api.example.com/data';

// ปรับโค้ดในไฟล์ `vite.config.js` เพื่อ export config
const config = {
  // การตั้งค่าของ Vite ของคุณ
};

export default config;

// ปรับโค้ดในไฟล์ `fetchData` เพื่อให้ถูกต้อง
export const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data:', data);

  } catch (error) {
    console.error('Error:', error.message);
    // ทำการแจ้งเตือนผู้ใช้หรือจัดการ errors อื่น ๆ ตามที่คุณต้องการ
  }
};
