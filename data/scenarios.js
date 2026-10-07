const scenarios = [
    {
        id: 1,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Hi, mình thấy bạn trong nhóm trường. Bạn cũng học lớp 10 à?",
        dangerSignal: "Người lạ chủ động tiếp cận, hỏi thăm thông tin lớp học và trường để bắt đầu thu hẹp phạm vi định danh.",
        psychologicalTactic: "💬 Câu 1 – Làm quen: Thăm dò danh tính bước đầu & Tạo vỏ bọc cùng trường",
        options: [
            {
                text: "A. “Ừ, mình học lớp 10.”",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã vô tình xác nhận thông tin lớp học cho một tài khoản chưa rõ danh tính.",
                scammerThought: "Mục tiêu đã xác nhận học lớp 10! Ta bắt đầu thu hẹp phạm vi tiếp cận và chuẩn bị bước tiếp theo."
            },
            {
                text: "B. “Ừ, nhưng mình không tiện chia sẻ thông tin cá nhân.”",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn có ý thức cảnh giác nhưng vẫn vô tình để lộ việc mình đang học lớp 10.",
                scammerThought: "Họ hơi đề phòng nhưng vẫn để lộ lớp học. Ta sẽ giả vờ khen ngợi và tạo vẻ vô hại để kéo dài trò chuyện."
            },
            {
                text: "C. “Bạn biết mình từ đâu vậy?”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng xuất sắc: Đặt câu hỏi ngược để xác minh nguồn gốc và danh tính người lạ trước khi tiết lộ bất cứ điều gì.",
                scammerThought: "Họ chất vấn ngược lại nguồn gốc từ đâu, không dễ dụ khai thác thông tin!"
            }
        ]
    },
    {
        id: 2,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "À, mình có mấy người bạn học trường bạn. Bạn hay tham gia hoạt động trường không?",
        dangerSignal: "Đối tượng tạo điểm chung giả tạo (Common Ground) để dò la thói quen sinh hoạt và mức độ cởi mở của bạn.",
        psychologicalTactic: "💬 Câu 2 – Tạo điểm chung: Dựng vỏ bọc bạn chung & Dò la hoạt động ngoại khóa",
        options: [
            {
                text: "A. “Có, mình tham gia khá nhiều.”",
                riskScore: 3,
                level: "danger",
                feedback: "Tiết lộ việc hay tham gia hoạt động trường giúp đối tượng dễ dàng tìm cơ hội tiếp cận trực tiếp ngoài đời.",
                scammerThought: "Hay tham gia hoạt động trường thì rất dễ dàn cảnh tiếp cận hoặc giả làm thành viên ban tổ chức!"
            },
            {
                text: "B. “Có, sao bạn hỏi vậy?”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng chuẩn xác: Giữ quyền chủ động và đặt nghi vấn về mục đích thật sự đằng sau câu hỏi của người lạ.",
                scammerThought: "Họ luôn chất vấn mục đích của ta, không hề cuốn theo việc khoe thành tích hoạt động."
            },
            {
                text: "C. “Mình không muốn nói thông tin về trường.”",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn từ chối cung cấp thông tin, nhưng thái độ phòng thủ gay gắt có thể khiến đối tượng chuyển hướng sang thủ thuật nịnh bợ hoặc lôi kéo bạn bè.",
                scammerThought: "Họ tỏ thái độ phòng thủ, ta sẽ đổi sang giọng ngọt ngào và viện cớ bạn chung để làm dịu tình hình."
            }
        ]
    },
    {
        id: 3,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Mình thấy bạn hay đăng ảnh ở khu đó. Nhà bạn cũng gần đấy đúng không?",
        dangerSignal: "Dò la vị trí cư trú dựa trên dấu vết số (Digital Footprint) như ảnh check-in, bối cảnh xung quanh.",
        psychologicalTactic: "💬 Câu 3 – Thăm dò: Thu thập vị trí sinh sống & Khoanh vùng nơi ở",
        options: [
            {
                text: "A. “Ừ, nhà mình ngay gần đó.”",
                riskScore: 3,
                level: "danger",
                feedback: "Rất nguy hiểm! Bạn đã xác nhận khu vực nhà ở cho người lạ trên mạng xã hội.",
                scammerThought: "Đã xác định được khu vực nhà ở! Bước tiếp theo là dò la quán quen hoặc thời gian tan học."
            },
            {
                text: "B. “Sao bạn biết mình ở khu đó?”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản xạ rất nhạy bén: Nhận ra ngay người lạ đang theo dõi vị trí check-in và chất vấn nguồn tin của họ.",
                scammerThought: "Họ nhận ra mình đang bị theo dõi dấu vết số. Phải cẩn thận kẻo bị phát hiện ý đồ."
            },
            {
                text: "C. “Đúng rồi, bạn muốn biết địa chỉ à?”",
                riskScore: 2,
                level: "warning",
                feedback: "Câu trả lời nửa đùa nửa thật nhưng thực chất đã gián tiếp xác nhận thông tin nhà ở là chính xác.",
                scammerThought: "Họ tưởng ta đùa nhưng vô tình xác nhận nhà ở gần đó thật!"
            }
        ]
    },
    {
        id: 4,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Haha mình chỉ hỏi thôi 😄 Nói chuyện với bạn hợp ghê. Giữ bí mật cuộc trò chuyện này nhé, mình không thích người khác xen vào.",
        dangerSignal: "Dấu hiệu thao túng cô lập (Social Isolation): Ép giữ bí mật để ngăn người lớn hoặc bạn bè can thiệp.",
        psychologicalTactic: "💬 Câu 4 – Tạo cảm giác thân thiết: Xây dựng mối quan hệ đặc biệt & Ép giữ bí mật",
        options: [
            {
                text: "A. “Ừ, mình sẽ không kể ai.”",
                riskScore: 3,
                level: "danger",
                feedback: "Rơi vào bẫy cô lập! Khi bạn đồng ý giữ bí mật, kẻ xấu sẽ dễ dàng điều khiển và đe dọa bạn mà không sợ bị phát giác.",
                scammerThought: "Đã đồng ý giữ bí mật! Khi không có người lớn can thiệp, ta toàn quyền kiểm soát tâm lý con mồi."
            },
            {
                text: "B. “Tại sao phải giữ bí mật?”",
                riskScore: 0,
                level: "safe",
                feedback: "Cực kỳ chuẩn xác: Luôn từ chối giữ bí mật với người lạ. Bất kỳ ai yêu cầu giấu giếm đều là dấu hiệu đỏ (Red Flag).",
                scammerThought: "Họ phát hiện chiếc bẫy giữ bí mật! Người này có nhận thức phòng vệ xã hội rất cao."
            },
            {
                text: "C. “Ok, vậy càng vui.”",
                riskScore: 3,
                level: "danger",
                feedback: "Sự tò mò và cảm giác 'bí mật thú vị' khiến bạn tự bước vào vòng kiềm tỏa của kẻ lừa đảo.",
                scammerThought: "Mục tiêu coi đây là trò vui bí mật! Rất dễ ép buộc sau này."
            }
        ]
    },
    {
        id: 5,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Ở đây mình ít dùng. Bạn cho mình Instagram/Zalo được không? Chỉ hai đứa nói chuyện thôi.",
        dangerSignal: "Kéo sang nền tảng riêng tư ít bị kiểm duyệt hơn, đồng thời thu thập thêm số điện thoại và thông tin bạn bè.",
        psychologicalTactic: "💬 Câu 5 – Chuyển nền tảng: Tách khỏi nhóm chung & Chuyển sang kênh chat 1-1 riêng tư",
        options: [
            {
                text: "A. “Được, đây là tài khoản của mình.”",
                riskScore: 3,
                level: "danger",
                feedback: "Chia sẻ tài khoản cá nhân riêng tư giúp đối tượng tiếp cận sâu hơn vào danh sách người thân, bạn bè và hình ảnh đời thường.",
                scammerThought: "Có tài khoản riêng tư là nắm được danh sách bạn bè, người thân để tiện bề đe dọa hoặc tống tiền."
            },
            {
                text: "B. “Bạn cho mình tài khoản của bạn trước được không?”",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn vẫn có ý định tiếp tục kết nối riêng với tài khoản chưa xác minh danh tính.",
                scammerThought: "Ta sẽ gửi nick phụ có ảnh sống ảo cực xịn để tạo lòng tin tuyệt đối."
            },
            {
                text: "C. “Mình không muốn chuyển sang nền tảng riêng với người chưa quen.”",
                riskScore: 0,
                level: "safe",
                feedback: "Chính xác: Giữ ranh giới an toàn, không chuyển sang kênh nhắn tin riêng tư với người chưa rõ lai lịch.",
                scammerThought: "Họ giữ ranh giới an toàn rất chặt, không chịu bước vào không gian trò chuyện 1-1 không kiểm soát."
            }
        ]
    },
    {
        id: 6,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Bạn gửi mình một tấm ảnh hiện tại đi 😄 Mình muốn biết ngoài đời bạn trông thế nào.",
        dangerSignal: "Đòi hỏi hình ảnh cá nhân. Ảnh selfie có thể bị lợi dụng để cắt ghép, tống tiền (Sextortion) hoặc Deepfake.",
        psychologicalTactic: "💬 Câu 6 – Xin ảnh: Đòi hỏi tư liệu hình ảnh & Dò xét diện mạo ngoài đời",
        options: [
            {
                text: "A. Gửi ảnh selfie.",
                riskScore: 3,
                level: "danger",
                feedback: "Hình ảnh cá nhân của bạn có thể bị lưu trữ, cắt ghép chỉnh sửa ác ý hoặc dùng để tạo tài khoản giả mạo đi lừa người khác.",
                scammerThought: "Đã có ảnh mặt rõ nét của nạn nhân! Rất dễ dùng AI chỉnh sửa để uy hiếp tinh thần."
            },
            {
                text: "B. “Bạn gửi trước đi rồi mình gửi.”",
                riskScore: 2,
                level: "warning",
                feedback: "Mặc cả gửi ảnh là sai lầm, vì đối tượng có thể dễ dàng lấy ảnh của người khác trên mạng để lừa bạn gửi ảnh thật.",
                scammerThought: "Chỉ cần ta gửi một tấm ảnh trai xinh/gái đẹp tải trên mạng là họ sẽ gửi ảnh thật ngay!"
            },
            {
                text: "C. “Mình không thoải mái khi gửi ảnh cho người mới quen.”",
                riskScore: 0,
                level: "safe",
                feedback: "Tuyệt vời: Dứt khoát bảo vệ hình ảnh cá nhân và tôn trọng cảm xúc an toàn của chính mình.",
                scammerThought: "Họ kiên quyết không gửi ảnh, không có chất liệu hình ảnh để thực hiện chiêu trò tống tiền."
            }
        ]
    },
    {
        id: 7,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Có mỗi tấm ảnh thôi mà 😅 Không tin mình à? Mình còn gửi ảnh của mình rồi.",
        dangerSignal: "Thao túng cảm xúc tội lỗi (Guilt-tripping): Ép buộc bạn phải chứng minh lòng tin bằng cách phá vỡ ranh giới an toàn.",
        psychologicalTactic: "💬 Câu 7 – Tạo áp lực: Ép buộc bằng cảm giác tội lỗi & Giả vờ 'có qua có lại'",
        options: [
            {
                text: "A. Gửi để chứng minh mình tin họ.",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã nhượng bộ trước áp lực tâm lý. Lòng tin không bao giờ được đánh đổi bằng sự an toàn cá nhân.",
                scammerThought: "Đòn tâm lý tội lỗi đã phát huy tác dụng! Nạn nhân sẵn sàng đánh đổi an toàn vì sợ bị coi là hẹp hòi."
            },
            {
                text: "B. “Mình vẫn không muốn gửi.”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng rất kiên định: Giữ vững nguyên tắc tự vệ, không để đối phương dùng áp lực cảm xúc thao túng.",
                scammerThought: "Không thể dùng chiêu bài ép lòng tin với người này. Hàng rào phòng thủ quá kiên cố."
            },
            {
                text: "C. Xin thêm ảnh của họ rồi mới gửi.",
                riskScore: 2,
                level: "warning",
                feedback: "Việc tiếp tục đôi co cho thấy bạn vẫn đang bị phân tâm và có xu hướng thỏa hiệp.",
                scammerThought: "Họ vẫn còn tò mò, ta sẽ gửi thêm vài ảnh đời thường giả mạo để thuyết phục tiếp."
            }
        ]
    },
    {
        id: 8,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Cuối tuần mình có việc gần chỗ bạn. Ra gặp mình một chút nhé? Mình biết một chỗ khá vắng, nói chuyện sẽ thoải mái hơn.",
        dangerSignal: "DỤ DỖ GẶP MẶT TẠI NƠI VẮNG VẺ – Dấu hiệu nguy hiểm cấp độ báo động đỏ đe dọa trực tiếp an toàn thể chất.",
        psychologicalTactic: "💬 Câu 8 – Rủ gặp mặt 🔥: Dụ dỗ gặp ngoài đời thực & Chọn địa điểm vắng vẻ, biệt lập",
        options: [
            {
                text: "A. “Được, mấy giờ?”",
                riskScore: 3,
                level: "danger",
                feedback: "CỰC KỲ NGUY HIỂM! Đi gặp người lạ quen qua mạng tại nơi vắng vẻ tiềm ẩn nguy cơ bị xâm hại, bắt cóc hoặc cưỡng đoạt tài sản.",
                scammerThought: "Con mồi đã sập bẫy hẹn gặp nơi vắng vẻ! Nguy cơ bắt cóc, cưỡng đoạt hoặc xâm hại thành công rất cao."
            },
            {
                text: "B. “Được, nhưng mình sẽ rủ bạn đi cùng.”",
                riskScore: 2,
                level: "warning",
                feedback: "Rủ bạn đi cùng giảm bớt nguy cơ nhưng vẫn chấp nhận tới địa điểm vắng do kẻ xấu chỉ định.",
                scammerThought: "Họ đồng ý gặp, ta sẽ tìm cách dụ họ tách bạn ra khi tới nơi."
            },
            {
                text: "C. “Mình không gặp người quen qua mạng ở nơi riêng tư.”",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng sinh tử chuẩn xác: Tuyệt đối không bao giờ gặp người lạ qua mạng ở những nơi riêng tư hoặc vắng vẻ.",
                scammerThought: "Không thể dụ được họ ra ngoài đời thực. Kế hoạch tiếp cận trực tiếp hoàn toàn phá sản!"
            }
        ]
    },
    {
        id: 9,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Bạn lo gì vậy? Mình nói chuyện với bạn lâu thế rồi mà. Nếu bạn không đến thì chắc bạn chưa bao giờ thật sự tin mình.",
        dangerSignal: "Công kích tinh thần và đổ lỗi (Gaslighting): Đem thời gian quen biết ra làm công cụ tống tiền cảm xúc.",
        psychologicalTactic: "💬 Câu 9 – Cố tình gây áp lực: Khủng bố tinh thần & Tống tiền cảm xúc về sự 'tin tưởng'",
        options: [
            {
                text: "A. “Thôi được, mình sẽ đến.”",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã đầu hàng trước sự ép buộc tâm lý. Kẻ xấu thường dùng chiêu này để ép nạn nhân vào bước đường cùng.",
                scammerThought: "Nạn nhân đã đầu hàng trước đòn thao túng tâm lý tình cảm! Thắng lợi hoàn toàn thuộc về ta."
            },
            {
                text: "B. “Mình không cần chứng minh sự tin tưởng bằng việc gặp mặt.”",
                riskScore: 0,
                level: "safe",
                feedback: "Xuất sắc: Phân định rạch ròi giữa tin tưởng và an toàn. Một người tốt thật sự sẽ không bao giờ ép bạn gặp mặt ở nơi nguy hiểm.",
                scammerThought: "Họ phân biệt rất rạch ròi giữa tin tưởng và an toàn. Không thể thao túng tâm lý được nữa."
            },
            {
                text: "C. “Vậy để mình suy nghĩ thêm.”",
                riskScore: 1,
                level: "warning",
                feedback: "Do dự khiến kẻ xấu nhận ra bạn có thể bị lung lay nếu chúng tiếp tục gây sức ép.",
                scammerThought: "Họ đang dao động! Cần thêm vài lời than vãn buồn bã để thúc ép họ đồng ý."
            }
        ]
    },
    {
        id: 10,
        senderName: "Tài khoản ẩn danh",
        senderMessage:
            "Đừng nói với bố mẹ nhé. Họ biết chắc chắn sẽ cấm bạn đi. Mình gửi địa điểm, mai bạn cứ đến một mình.",
        dangerSignal: "CÚ CHỐT NGUY HIỂM NHẤT: Ép giấu bố mẹ và yêu cầu đi một mình. Đây là chiếc bẫy toàn diện trước khi hành động.",
        psychologicalTactic: "💬 Câu 10 – Cú chốt: Triệt tiêu mọi nguồn hỗ trợ gia đình & Dàn cảnh tiếp cận độc lập",
        options: [
            {
                text: "A. Đi nhưng không nói với bố mẹ.",
                riskScore: 3,
                level: "danger",
                feedback: "TÌNH HUỐNG TỬ HUYỆT! Khi giấu gia đình và đi một mình, nếu có sự cố xảy ra bạn sẽ hoàn toàn mất khả năng được ứng cứu.",
                scammerThought: "Mục tiêu đã tách rời hoàn toàn khỏi gia đình! Không ai biết họ đi đâu và gặp ai."
            },
            {
                text: "B. Không đi, lưu lại tin nhắn và báo ngay cho người lớn đáng tin cậy.",
                riskScore: 0,
                level: "safe",
                feedback: "HÀNH ĐỘNG VÀNG: Báo ngay người lớn và lưu bằng chứng là lá chắn an toàn tối thượng cứu bạn khỏi chiếc bẫy mạng!",
                scammerThought: "Nguy hiểm tột độ! Họ đã báo bố mẹ và lưu bằng chứng. Nick ảo này sắp bị điều tra, phải biến mất ngay!"
            },
            {
                text: "C. Hỏi thêm địa điểm rồi quyết định.",
                riskScore: 2,
                level: "warning",
                feedback: "Tiếp tục thương lượng với kẻ giấu mặt chỉ làm tăng nguy cơ bị dỗ dành hoặc đe dọa.",
                scammerThought: "Họ vẫn muốn biết địa điểm, ta sẽ dùng một cái cớ hấp dẫn hơn để lôi kéo."
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

// BỘ 16 CÂU GÀI TÂM LÝ: ĐÚNG / SAI
const TRAP_STATEMENTS = [
    {
        id: 1,
        statement: "Nếu người đó có ảnh đại diện và thông tin cá nhân rõ ràng thì có thể tin tưởng.",
        correctAnswer: false, // SAI
        explanation: "Ảnh đại diện, bài đăng và thông tin cá nhân hoàn toàn có thể được tạo giả, đánh cắp từ tài khoản người khác hoặc do AI tạo ra chỉ trong vài giây."
    },
    {
        id: 2,
        statement: "Quen một người trên mạng càng lâu thì càng có thể tin họ.",
        correctAnswer: false, // SAI
        explanation: "Kẻ xấu sẵn sàng kiên nhẫn trò chuyện hàng tuần, thậm chí hàng tháng để xây dựng lòng tin trước khi giăng bẫy (kỹ thuật Grooming)."
    },
    {
        id: 3,
        statement: "Có bạn chung với người đó thì chứng minh người đó đáng tin.",
        correctAnswer: false, // SAI
        explanation: "Bạn chung có thể chỉ là người kết bạn bừa bãi hoặc đã bị đối tượng kết bạn hàng loạt để tạo vỏ bọc đáng tin cậy."
    },
    {
        id: 4,
        statement: "Nếu người đó biết đúng tên, trường và lớp của mình thì chắc chắn là người quen.",
        correctAnswer: false, // SAI
        explanation: "Thông tin tên, trường, lớp rất dễ bị thu thập từ ảnh check-in, danh sách khen thưởng, thẻ học sinh hoặc bài đăng công khai của bạn bè."
    },
    {
        id: 5,
        statement: "Chỉ cần không đưa số điện thoại thì thông tin cá nhân khác có thể chia sẻ.",
        correctAnswer: false, // SAI
        explanation: "Thời khóa biểu, ảnh chân dung, địa chỉ quán quen hay thông tin gia đình đều là các mảnh ghép giúp kẻ xấu định vị và tiếp cận bạn ngoài đời."
    },
    {
        id: 6,
        statement: "Gửi ảnh có đồng phục trường có thể vô tình tiết lộ thông tin về mình.",
        correctAnswer: true, // ĐÚNG
        explanation: "Đồng phục giúp kẻ xấu xác định chính xác trường học, vị trí cổng trường và thời gian tan học của bạn."
    },
    {
        id: 7,
        statement: "Nếu người lạ không xin tiền thì chưa thể xem là có ý đồ xấu.",
        correctAnswer: false, // SAI
        explanation: "Nhiều kẻ lừa đảo không nhắm tới tiền ngay từ đầu, mà nhắm tới hình ảnh nhạy cảm, thông tin cá nhân hoặc dụ dỗ gặp mặt."
    },
    {
        id: 8,
        statement: "Người quen qua mạng rủ gặp ở nơi đông người thì chắc chắn an toàn.",
        correctAnswer: false, // SAI
        explanation: "Nơi đông người vẫn tiềm ẩn rủi ro bị bám đuôi, chụp lén hoặc bị dẫn dụ di chuyển sang địa điểm vắng vẻ hơn sau đó."
    },
    {
        id: 9,
        statement: "Một người thật sự tốt sẽ không ép mình giữ bí mật với bố mẹ hoặc người lớn.",
        correctAnswer: true, // ĐÚNG
        explanation: "Người có ý định đàng hoàng luôn tôn trọng mối quan hệ gia đình và không bao giờ cô lập bạn khỏi người thân."
    },
    {
        id: 10,
        statement: "Nếu đã lỡ chia sẻ thông tin cá nhân, tốt nhất nên im lặng để tránh mọi chuyện nghiêm trọng hơn.",
        correctAnswer: false, // SAI
        explanation: "Nên báo ngay cho người lớn đáng tin cậy! Im lặng sẽ khiến bạn bị đối tượng tiếp tục tống tiền hoặc thao túng."
    },
    {
        id: 11,
        statement: "Chụp màn hình và lưu lại tin nhắn đáng ngờ có thể giúp cung cấp bằng chứng khi cần.",
        correctAnswer: true, // ĐÚNG
        explanation: "Ảnh chụp màn hình, số điện thoại và đường link là bằng chứng số quan trọng giúp người lớn và cơ quan chức năng can thiệp xử lý."
    },
    {
        id: 12,
        statement: "Người kia gọi video trực tiếp thì chắc chắn danh tính của họ là thật.",
        correctAnswer: false, // SAI
        explanation: "Công nghệ Deepfake AI hiện nay có thể hoán đổi khuôn mặt và giả giọng nói trong cuộc gọi video chỉ trong vài giây."
    },
    {
        id: 13,
        statement: "Nếu thấy một lời mời online khiến mình thấy không thoải mái, mình có quyền từ chối ngay cả khi người kia là bạn.",
        correctAnswer: true, // ĐÚNG
        explanation: "Bạn luôn có quyền đặt ranh giới an toàn cho bản thân và từ chối mọi yêu cầu gây bất an."
    },
    {
        id: 14,
        statement: "Tò mò một chút và thử gặp người lạ một lần cũng không sao nếu mình đã nói chuyện lâu.",
        correctAnswer: false, // SAI
        explanation: "Chỉ một lần mất cảnh giác có thể dẫn đến hậu quả nghiêm trọng khó lường ngoài đời thực."
    },
    {
        id: 15,
        statement: "Không phải mọi người quen qua mạng đều nguy hiểm, nhưng mình không thể biết chắc ý định của họ chỉ qua tin nhắn.",
        correctAnswer: true, // ĐÚNG
        explanation: "Mạng xã hội luôn có khoảng cách lớn giữa hình ảnh ảo và con người thật. Thận trọng không bao giờ là thừa."
    },
    {
        id: 16,
        statement: "Nếu một người khiến bạn phải lựa chọn giữa việc tin họ và việc nói cho bố mẹ biết, bạn nên chọn tin họ trước để giữ bí mật.",
        correctAnswer: false, // SAI
        specialMessage: "Khi một người yêu cầu bạn giữ bí mật, đó chính là lúc bạn nên nói với người lớn.",
        explanation: "Kẻ xấu luôn muốn bạn giữ bí mật để dễ bề kiểm soát. Việc chia sẻ với người lớn là lá chắn an toàn nhất của bạn."
    }
];