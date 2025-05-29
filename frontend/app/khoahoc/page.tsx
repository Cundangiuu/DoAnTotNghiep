import React from 'react';

const CoursesPage = () => {
  const coursesData = [
    { code: 'COU-28112401', name: 'Starter 2 - K22', hours: 26, tuition: '702.000', level: 'Young Learners' },
    { code: 'COU-28112402', name: 'Starter 3', hours: 88, tuition: '199.000', level: 'Young Learners' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh', display: 'flex', color: '#333' }}>

      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#f5f6fa', borderRight: '1px solid #ddd', padding: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>ARiSE</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Dashboard</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer', color: '#9370db' }}>Courses</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Classes</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Students</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Reports</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Accounting</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Staffs</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Admin Portal</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px' }}>

        {/* Navbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>

          {/* Search and Filter */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px', color: '#777' }}>Search</div>
            <div style={{ marginRight: '20px', color: '#777' }}>Filter</div>
          </div>

          {/* "Create Course" Button */}
          <button style={{ backgroundColor: '#9370db', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create Course</button>
        </div>

        {/* Courses List */}
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Code</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Number of hours</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Tuition</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Level</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {coursesData.map((course, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{course.code}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{course.name}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{course.hours}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{course.tuition}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{course.level}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;