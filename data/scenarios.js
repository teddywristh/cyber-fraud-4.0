/**
 * CYBER FRAUD 4.0 - Behavioral Cyber Simulation Engine
 * Kịch bản chuẩn hóa 6 bước tâm lý dụ dỗ (Online Grooming Sequence)
 */

const scenarios = [
    {
        id: 1,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Ê, thấy bạn hay đăng story học ở trường LHP đúng không? 😭",
        dangerSignal: "Người lạ bắt chuyện bằng việc soi mói Story công khai, tạo sự quen thuộc để thăm dò trường học.",
        psychologicalTactic: "Bước 1: Bắt chuyện & Khai thác thông tin từ dấu vết số (Digital Footprint)",
        options: [
            {
                text: "A. “Ừ đúng rồi, sao vậy?”",
                riskScore: 2,
                level: "warning",
                feedback: "Bạn đã vô tình xác nhận thông tin trường học của mình cho một tài khoản chưa rõ danh tính.",
                scammerThought: "Con mồi đã xác nhận học tại trường! Ta đã khoanh vùng được trường học thành công."
            },
            {
                text: "B. “Bạn là ai vậy?”",
                riskScore: 1,
                level: "warning",
                feedback: "Hỏi danh tính là cần thiết, nhưng bạn vẫn tiếp chuyện và tạo cơ hội cho kẻ lạ dẫn dắt tiếp.",
                scammerThought: "Mục tiêu tò mò về danh tính của ta. Giờ ta sẽ bịa ra việc học cùng thành phố để tạo cảm giác đồng hương."
            },
            {
                text: "C. “Mình không quen bạn.”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng dứt khoát: Thiết lập ranh giới an toàn ngay từ đầu, không xác nhận thông tin trường lớp.",
                scammerThought: "Họ từ chối tương tác và không xác nhận trường lớp, rất khó khai thác tiếp."
            }
        ]
    },
    {
        id: 2,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Mình cũng ở Hải Phòng nè =)) Bạn học lớp 10 à?",
        dangerSignal: "Tạo cảm giác an toàn giả tạo bằng điểm chung đồng hương, từ đó dò la chính xác khối lớp và độ tuổi.",
        psychologicalTactic: "Bước 2: Tìm điểm chung giả tạo (Common Ground) & Dò la độ tuổi/khối lớp",
        options: [
            {
                text: "A. “Ừ, mình lớp 10.”",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã tiết lộ khối lớp. Kẻ xấu có thể dùng thông tin này để tiếp cận tại cổng trường hoặc tìm hiểu bạn bè cùng khóa.",
                scammerThought: "Đã biết chính xác học lớp 10! Con mồi rất ngây thơ và dễ khai thác thông tin cá nhân."
            },
            {
                text: "B. “Bạn cũng lớp 10 hả?”",
                riskScore: 2,
                level: "warning",
                feedback: "Phản hồi này gián tiếp thừa nhận bạn cũng học lớp 10, đồng thời cuốn bạn sâu hơn vào cuộc trò chuyện.",
                scammerThought: "Họ hỏi lại nghĩa là họ cũng học lớp 10 thật rồi! Ta sẽ giả vờ nhận đồng trang lứa để làm quen sâu hơn."
            },
            {
                text: "C. “Mình không muốn nói thông tin cá nhân.”",
                riskScore: 0,
                level: "safe",
                feedback: "Rất chuẩn xác: Chủ động bảo vệ thông tin đời tư và không cung cấp dữ liệu cá nhân cho người chưa quen.",
                scammerThought: "Hàng rào phòng thủ vững chắc, họ kiên quyết không để lộ thông tin lứa tuổi."
            }
        ]
    },
    {
        id: 3,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Nói chuyện hợp ghê :)) Cho mình xin Instagram với, tiện nói chuyện hơn.",
        dangerSignal: "Kéo sang mạng xã hội cá nhân riêng tư để xem thêm hình ảnh đời tư, danh sách bạn bè và thời gian online.",
        psychologicalTactic: "Bước 3: Khen ngợi tạo thân thiết giả tạo & Dụ chuyển kênh chat riêng tư",
        options: [
            {
                text: "A. “Ok, để mình gửi.”",
                riskScore: 3,
                level: "danger",
                feedback: "Gửi tài khoản Instagram riêng tư giúp đối tượng soi mói ảnh cá nhân, thói quen check-in và liên hệ bạn bè của bạn.",
                scammerThought: "Có Instagram rồi! Giờ ta có thể xem toàn bộ ảnh, bạn bè thân và địa điểm thường tới của nạn nhân."
            },
            {
                text: "B. “Sao bạn muốn Instagram?”",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn có nghi ngờ nhưng việc chất vấn nhẹ nhàng vẫn mở đường cho đối tượng dùng lời ngọt ngào thuyết phục.",
                scammerThought: "Họ còn do dự, ta sẽ khen ngợi ảnh đại diện và nói muốn làm bạn thân để thuyết phục tiếp."
            },
            {
                text: "C. “Thôi, mình chỉ nói chuyện ở đây thôi.”",
                riskScore: 0,
                level: "safe",
                feedback: "Chính xác: Không chuyển sang nền tảng cá nhân riêng tư khi chưa biết rõ người đối diện là ai.",
                scammerThought: "Không chịu đưa mạng xã hội riêng tư, ta không thể thu thập thêm hình ảnh đời tư của họ."
            }
        ]
    },
    {
        id: 4,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Tan học bạn thường về luôn hay hay đi đâu với bạn? Mình cũng hay lang thang quanh trường.",
        dangerSignal: "Dò hỏi thói quen di chuyển, lịch tan học và thời điểm bạn ở một mình — chuẩn bị cho bước tiếp cận ngoài đời.",
        psychologicalTactic: "Bước 4: Dò la quy luật sinh hoạt & Xác định thời điểm nạn nhân đi một mình",
        options: [
            {
                text: "A. “Mình thường về thẳng.”",
                riskScore: 3,
                level: "danger",
                feedback: "Tiết lộ thói quen về thẳng một mình giúp kẻ xấu nắm được tuyến đường và khung giờ bạn dễ bị bám đuôi.",
                scammerThought: "Biết nạn nhân tan học về thẳng một mình rồi! Rất dễ đón đường hoặc tiếp cận trực tiếp."
            },
            {
                text: "B. “Mình hay đi với bạn.”",
                riskScore: 1,
                level: "warning",
                feedback: "Đi cùng bạn an toàn hơn, nhưng bạn vẫn đang tiết lộ thói quen sinh hoạt ngoài giờ học cho kẻ lạ.",
                scammerThought: "Hay đi cùng bạn, ta sẽ dò la xem họ hay tụ tập ở quán trà sữa hay địa điểm nào quanh trường."
            },
            {
                text: "C. “Mình không chia sẻ lịch sinh hoạt của mình.”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản xạ tự vệ tuyệt vời: Lịch trình sinh hoạt là dữ liệu nhạy cảm tuyệt đối không chia sẻ trên mạng.",
                scammerThought: "Con mồi cảnh giác cao độ, không thể nắm được quy luật đi lại và sinh hoạt của họ."
            }
        ]
    },
    {
        id: 5,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Bạn đừng kể mấy đứa bạn là mình nói chuyện với bạn nha 😂 Chúng nó biết lại trêu.",
        dangerSignal: "Chiếc bẫy cô lập nguy hiểm (Social Isolation): Dùng cớ 'sợ trêu' để ép giữ bí mật, ngăn cản bạn bè và người lớn can thiệp.",
        psychologicalTactic: "Bước 5: Thao túng cô lập nạn nhân & Bình thường hóa việc giữ bí mật với người xung quanh",
        options: [
            {
                text: "A. “Ừ, mình không kể đâu.”",
                riskScore: 3,
                level: "danger",
                feedback: "Rơi vào bẫy cô lập! Khi bạn đồng ý giữ bí mật, kẻ xấu sẽ toàn quyền thao túng bạn mà không sợ bị phát giác.",
                scammerThought: "Đã thành công cô lập nạn nhân khỏi bạn bè! Giờ ta có thể giăng bẫy mà không sợ ai cảnh báo họ."
            },
            {
                text: "B. “Sao phải giấu vậy?”",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn có đặt câu hỏi nhưng việc tiếp tục đối thoại có thể khiến đối tượng dùng chiêu tình cảm để thuyết phục.",
                scammerThought: "Họ thắc mắc nhẹ nhàng, ta sẽ viện cớ ngại ngùng để biến bí mật này thành mối liên kết đặc biệt giữa 2 đứa."
            },
            {
                text: "C. “Nếu phải giấu thì mình không nói chuyện nữa.”",
                riskScore: 0,
                level: "safe",
                feedback: "Nguyên tắc vàng: Bất kỳ ai yêu cầu bạn giấu giếm bạn bè hoặc người lớn đều là dấu hiệu đỏ (Red Flag) cần dừng lại ngay.",
                scammerThought: "Kế hoạch cô lập thất bại hoàn toàn! Người này nhận diện được ngay chiêu trò giấu giếm."
            }
        ]
    },
    {
        id: 6,
        senderName: "Tài khoản ẩn danh",
        senderMessage: "Cuối tuần mình cũng ở gần trường bạn. Mình gặp nhau uống nước một chút không? Không cần nói với bố mẹ đâu, gặp ở chỗ đông người thôi.",
        dangerSignal: "ĐÒN TẤN CÔNG CUỐI CÙNG: Dụ dỗ gặp mặt ngoài đời thực + Ép giấu bố mẹ dưới bình phong 'chỗ đông người'.",
        psychologicalTactic: "Bước 6: Cú chốt tiếp cận thể chất (Physical Meetup) & Đánh lừa cảm giác an toàn ('chỗ đông người')",
        options: [
            {
                text: "A. “Ừ, được, bạn gửi địa điểm đi.”",
                riskScore: 3,
                level: "danger",
                feedback: "NGUY HIỂM TỘT ĐỘ! Đi gặp người quen qua mạng mà giấu bố mẹ khiến bạn hoàn toàn mất khả năng được ứng cứu khi bị xâm hại, cưỡng đoạt hoặc bắt cóc.",
                scammerThought: "SẬP BẪY RỒI! Nạn nhân đã đồng ý gặp mà không nói với bố mẹ. Ta có thể điều chuyển họ sang chỗ vắng khi tới nơi."
            },
            {
                text: "B. “Để mình suy nghĩ đã.”",
                riskScore: 2,
                level: "warning",
                feedback: "Do dự trước một lời mời rủi ro khiến kẻ xấu có thêm thời gian thuyết phục hoặc tạo áp lực tâm lý để ép bạn đi.",
                scammerThought: "Họ đang lung lay! Ta sẽ dồn ép bằng cách nói 'chỉ gặp 10 phút thôi' để khiến họ gật đầu."
            },
            {
                text: "C. “Không, nếu gặp thì mình sẽ nói với bố mẹ/người lớn trước.”",
                riskScore: 0,
                level: "safe",
                feedback: "LÁ CHẮN AN TOÀN TUYỆT ĐỐI: Luôn công khai với người lớn đáng tin cậy. Kẻ xấu sẽ bỏ chạy ngay lập tức khi biết có sự can thiệp của phụ huynh.",
                scammerThought: "NGUY HIỂM! Họ sẽ nói với bố mẹ. Bị lộ rồi, phải xóa tài khoản và biến mất ngay lập tức!"
            }
        ]
    }
];

const maxRiskScore = scenarios.reduce((total, scenario) => {
    const highestOptionRisk = Math.max(
        ...scenario.options.map((option) => option.riskScore)
    );

    return total + highestOptionRisk;
}, 0);