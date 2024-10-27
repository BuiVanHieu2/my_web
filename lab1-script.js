document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('courseForm');
    const notification = document.getElementById('notification');
    const courseIdInput = document.getElementById('courseId');
    const createAtInput = document.getElementById('createAt');
    const updateAtInput = document.getElementById('updateAt');
    const deleteBtn = document.getElementById('deleteBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Xử lý submit form
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Giả lập việc lưu khóa học
        notification.className = 'success';
        notification.innerText = 'Khóa học đã được tạo/cập nhật thành công!';
        notification.classList.remove('hidden');
        console.log('Course submitted');
    });

    // Xử lý khi xóa khóa học
    window.confirmDelete = function () {
        if (confirm('Bạn có chắc chắn muốn xóa khóa học này không?')) {
            notification.className = 'error';
            notification.innerText = 'Khóa học đã được xóa!';
            notification.classList.remove('hidden');
            console.log('Course deleted');
        }
    };

    // Giả lập việc lấy dữ liệu khóa học khi chỉnh sửa
    function loadCourseData() {
        // Nếu đang chỉnh sửa khóa học, giả lập dữ liệu khóa học
        const isEditing = false; // Thay đổi thành true nếu chỉnh sửa

        if (isEditing) {
            courseIdInput.value = '123';
            document.getElementById('courseName').value = 'Khóa Học Mẫu';
            document.getElementById('courseDescription').value = 'Đây là mô tả cho khóa học mẫu.';
            document.getElementById('instructor').value = '1';
            createAtInput.value = '2024-09-28 10:00';
            updateAtInput.value = '2024-09-28 12:00';
            submitBtn.innerText = 'Cập Nhật Khóa Học';
            deleteBtn.style.display = 'inline-block';
        } else {
            document.getElementById('courseIdGroup').style.display = 'none';
            document.getElementById('createAtGroup').style.display = 'none';
            document.getElementById('updateAtGroup').style.display = 'none';
            deleteBtn.style.display = 'none';
        }
    }

    loadCourseData();
});
