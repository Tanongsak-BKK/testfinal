const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post', (requset, response) => {
    let fullName = requset.body.fullName || ""
    let keycardOption = requset.body.keycardOption || ""
    let address = requset.body.address || ""
    let bankOption = requset.body.bankOption || ""
    let file = requset.body.file

    let send = `
                <table class="mt-4 table table-bordered border-primary mx-auto" style="max-width: 600px;">
    <thead>
        <tr>
            <th colSpan="2" class="table-warning text-center table-bordered border-primary">
                ข้อมูลที่ส่งขึ้นไป
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 30%;">ชื่อ:</td>
            <td>${fullName}</td>
        </tr>
        <tr>
            <td>การรับคีย์การ์ด:</td>
            <td>${keycardOption}</td>
        </tr>
        <tr>
            <td>ที่อยู่:</td>
            <td>${address}</td>
        </tr>
        <tr>
            <td>ธนาคาร:</td>
            <td>${bankOption}</td>
        </tr>
        <tr>
            <td>ไฟล์รูป:</td>
            <td>${file}</td> </tr>
    </tbody>
</table>
    `
    response.send(send)
})

app.listen(port, () => {
    console.log('Server listening on port' + port)
})