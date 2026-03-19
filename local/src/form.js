import React from "react";

export default function FormPost() {
    let [postedData, setPostedData] = React.useState('');
    const form = React.useRef();

    const onSubmitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const formEnt = Object.fromEntries(formData.entries());

        fetch('/api/form-post', {
            method: 'POST',
            body: JSON.stringify(formEnt),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.text())
            .then(send => setPostedData(send))
            .catch(err => alert(err));
    };

    return (
        <>
            <div className="card mt-4 mx-auto border border-success" style={{ maxWidth: '600px' }}>
                <div className="card-header bg-primary text-warning fs-5">
                    แบบฟอร์มสำหรับ <br />
                    แจ้งการชำระค่าสมัครการเข้าใช้สปอร์ตคลับ
                </div>
                <div className="card-body ">
                    <form ref={form} onSubmit={onSubmitForm}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">ชื่อ-นามสกุลผู้สมัคร :</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Name & Surname" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">การรับ Keycard :</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="keycardOption" id="pickup" value="pickup" defaultChecked />
                                <label className="form-check-label" htmlFor="pickup">
                                    รับด้วยตนเองที่สปอร์ตคลับ
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="keycardOption" id="delivery" value="delivery" />
                                <label className="form-check-label" htmlFor="delivery">
                                    ส่งที่บ้าน (กรุณาใส่ที่อยู่)
                                </label>
                            </div>
                            <textarea className="form-control mt-2" id="address" name="address" rows="3" placeholder="Address"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">ชำระค่าสมัครผ่านธนาคาร :</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="bankOption" id="scb" value="scb" defaultChecked />
                                <label className="form-check-label" htmlFor="scb">
                                    ธ.ไทยพาณิชย์
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="bankOption" id="kbank" value="kbank" />
                                <label className="form-check-label" htmlFor="kbank">
                                    ธ.กสิกรไทย
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="bankOption" id="bbl" value="bbl" />
                                <label className="form-check-label" htmlFor="bbl">
                                    ธ.กรุงเทพ
                                </label>
                            </div>
                        </div>

                        {/* แนบหลักฐานการโอนเงิน */}
                        <div className="mb-4">
                            <label htmlFor="File" className="form-label">แนบหลักฐานการโอนเงิน</label>
                            <input className="form-control" type="file" id="File" name="File" />
                        </div>

                        {/* ปุ่ม Submit และ Reset */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
                <div dangerouslySetInnerHTML={{ __html: postedData }}></div>
        </>
    );
}