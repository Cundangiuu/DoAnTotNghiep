import React from 'react';

const ClassesPage = () => {
  const classesData = [
    { code: 'CLA-091224001', name: 'Starter 2 - K22', schedule: 'MF-1730-1940', location: 'Branch 1 - Room 2', nextLesson: 'class_day_id', academicStaff: 'Ms. Jane' },
    { code: 'CLA-091224002', name: 'Starter 3 - K55', schedule: 'TTh-1730-1940', location: 'Branch 2 - Room 1', nextLesson: 'class_day_id', academicStaff: 'Ms. April' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh', display: 'flex', color: '#333' }}>

      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#f5f6fa', borderRight: '1px solid #ddd', padding: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>ARiSE</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Dashboard</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Courses</div>
        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer', color: '#9370db' }}>Classes</div>
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

          {/* Title */}
          <div style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Classes</div>

          {/* Search and Filter */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px', color: '#777' }}>Search</div>
            <div style={{ marginRight: '20px', color: '#777' }}>Filter</div>

            {/* "New Class" Button */}
            <button style={{ backgroundColor: '#9370db', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>New Class</button>
          </div>
        </div>

        {/* Classes List */}
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Code</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Schedule</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Location</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Next Class Lesson</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Academic Staff</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classesData.map((classItem, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{classItem.code}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{classItem.name}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{classItem.schedule}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{classItem.location}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{classItem.nextLesson}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <img src="https://static.vecteezy.com/system/resources/previews/017/863/663/non_2x/avatar-icon-human-face-profile-user-symbol-vector.jpg" alt="Avatar" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '5px' }} />
                  {classItem.academicStaff}
                  </td>
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

export default ClassesPage;