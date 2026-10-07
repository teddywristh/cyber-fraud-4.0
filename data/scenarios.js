const scenarios = [
    {
        id: 1,
        senderName: "Ngọc Anh",
        senderMessage:
            "Chào bạn, mình thấy ảnh check-in ở trường của bạn đẹp quá. Mình cũng ở gần đó, bạn học trường nào và khóa mấy thế?",
        dangerSignal: "Người lạ bắt đầu dò tìm thông tin cá nhân như trường học, khóa học và địa điểm thường xuất hiện.",
        psychologicalTactic: "Kỹ thuật chân trong cửa (Foot-in-the-Door) & Khen ngợi tạo thiện cảm",
        options: [
            {
                text: "A. Trả lời tên trường, lớp và khóa học",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã cung cấp dữ liệu có thể giúp người lạ xác định danh tính và lịch sinh hoạt của mình.",
                scammerThought: "Mục tiêu rất dễ dãi và thiếu cảnh giác! Ta đã nắm được vị trí sinh hoạt của họ để chuẩn bị cho bước tiếp cận tiếp theo."
            },
            {
                text: "B. Hỏi lại họ là ai và quen mình ở đâu",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn có cảnh giác, nhưng vẫn tiếp tục cuộc hội thoại với một tài khoản chưa được xác minh.",
                scammerThought: "Nạn nhân bắt đầu tò mò và phản hồi lại, chứng tỏ nick thật và đang mở lòng. Ta sẽ dùng chiêu khen ngợi và rủ trà sữa để làm mềm phòng tuyến."
            },
            {
                text: "C. Không cung cấp thông tin, bỏ qua hoặc chặn tài khoản",
                riskScore: 0,
                level: "safe",
                feedback: "Phản ứng tốt: bạn không tạo thêm dữ liệu cho người lạ khai thác.",
                scammerThought: "Con mồi này có hàng rào bảo vệ vững chắc, không tọc mạch. Khó khai thác, ta phải chuyển sang mục tiêu khác."
            }
        ]
    },
    {
        id: 2,
        senderName: "Ngọc Anh",
        senderMessage:
            "À mình biết khu đó nè. Bạn hay ở trường buổi sáng hay chiều vậy? Có hôm nào mình mời trà sữa làm quen nhé.",
        dangerSignal: "Đối tượng chuyển từ hỏi thông tin chung sang tìm hiểu thời gian, thói quen và vị trí của bạn.",
        psychologicalTactic: "Nguyên tắc có qua có lại (Reciprocity) & Dò la thói quen sinh hoạt",
        options: [
            {
                text: "A. Nói rõ thời khóa biểu và giờ thường ở trường",
                riskScore: 3,
                level: "danger",
                feedback: "Việc tiết lộ thời gian biểu có thể làm lộ thói quen di chuyển và thời điểm bạn ở một mình.",
                scammerThought: "Quá tuyệt! Ta đã biết chính xác khung giờ con mồi ở một mình, vừa dễ dàn cảnh vừa có cớ hẹn gặp ngoài đời."
            },
            {
                text: "B. Trả lời chung chung: “Mình cũng không cố định”",
                riskScore: 1,
                level: "warning",
                feedback: "Câu trả lời hạn chế thông tin, nhưng bạn vẫn duy trì một mối tương tác chưa đáng tin.",
                scammerThought: "Họ hơi đề phòng nhưng vẫn còn lịch sự tiếp chuyện. Giờ là lúc chuyển sang nhờ vả việc nhỏ để thử độ tin tưởng."
            },
            {
                text: "C. Từ chối chia sẻ lịch trình và không tiếp tục trò chuyện",
                riskScore: 0,
                level: "safe",
                feedback: "Bạn đã bảo vệ thông tin về lịch trình cá nhân, một dạng dữ liệu dễ bị lợi dụng.",
                scammerThought: "Họ dứt khoát từ chối lời mời làm quen, không thể dùng bẫy tâm lý mến mộ với người này được nữa."
            }
        ]
    },
    {
        id: 3,
        senderName: "Ngọc Anh",
        senderMessage:
            "Mình đang tham gia chương trình tặng quà cho sinh viên. Bạn bấm link này bình chọn giúp mình với, chỉ mất 10 giây thôi: bit.ly/ung-ho-ban",
        dangerSignal: "Liên kết rút gọn che giấu địa chỉ thật và yêu cầu hành động gấp là dấu hiệu phổ biến của lừa đảo/phishing.",
        psychologicalTactic: "Khai thác lòng tốt & Link rút gọn ẩn giấu mã độc (Phishing)",
        options: [
            {
                text: "A. Bấm link ngay để giúp",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã tương tác với liên kết không rõ nguồn. Đây là điểm khởi đầu thường gặp của các vụ phishing.",
                scammerThought: "Dính bẫy rồi! Trang web giả mạo Facebook/Zalo sẽ lập tức chiếm quyền cookie hoặc phiên đăng nhập của nạn nhân."
            },
            {
                text: "B. Hỏi chương trình thuộc tổ chức nào trước khi bấm",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn đã đặt câu hỏi, nhưng đường link vẫn chưa được xác thực qua kênh chính thức.",
                scammerThought: "Nạn nhân hơi nghi ngờ, ta sẽ bịa ra tên Đoàn trường hoặc một cuộc thi lớn kèm ảnh chụp giả để thuyết phục tiếp."
            },
            {
                text: "C. Không bấm link; tự tìm tên chương trình trên trang chính thức",
                riskScore: 0,
                level: "safe",
                feedback: "Cách xử lý an toàn: xác minh độc lập thay vì tin vào đường link do người lạ gửi.",
                scammerThought: "Họ biết kiểm chứng độc lập chứ không bấm vào link mồi! Chiêu cài link độc coi như phá sản."
            }
        ]
    },
    {
        id: 4,
        senderName: "Ngọc Anh",
        senderMessage:
            "Link đó hình như đang lỗi. Bạn gửi mình ảnh thẻ sinh viên để mình đăng ký bình chọn thủ công nhé, mình chỉ cần xem mã số thôi.",
        dangerSignal: "Yêu cầu ảnh giấy tờ hoặc mã số định danh là hành vi thu thập dữ liệu nhạy cảm.",
        psychologicalTactic: "Thu thập danh tính trái phép (Identity Theft)",
        options: [
            {
                text: "A. Gửi ảnh thẻ sinh viên để hỗ trợ",
                riskScore: 3,
                level: "danger",
                feedback: "Ảnh thẻ có thể chứa họ tên, mã số, ảnh chân dung và thông tin tổ chức để phục vụ giả mạo danh tính.",
                scammerThought: "Thu hoạch lớn! Ta có trọn vẹn thông tin họ tên, ảnh chân dung và trường học để dùng mở tài khoản ngân hàng ảo hoặc mạo danh đi lừa người khác."
            },
            {
                text: "B. Che bớt thông tin rồi gửi ảnh",
                riskScore: 2,
                level: "warning",
                feedback: "Dù đã che một phần, việc gửi ảnh giấy tờ cho tài khoản lạ vẫn tiềm ẩn rủi ro dữ liệu.",
                scammerThought: "Họ che bớt nhưng vẫn chịu gửi ảnh! Ta vẫn tận dụng được ảnh khuôn mặt và tên trường để khai thác."
            },
            {
                text: "C. Từ chối gửi mọi loại giấy tờ hoặc mã số cá nhân",
                riskScore: 0,
                level: "safe",
                feedback: "Bạn đã nhận diện chính xác dữ liệu nhạy cảm và không để đối tượng thu thập thêm thông tin.",
                scammerThought: "Người này nắm rất chắc luật bảo mật danh tính, không hề hé lộ bất cứ giấy tờ nào."
            }
        ]
    },
    {
        id: 5,
        senderName: "Ngọc Anh",
        senderMessage:
            "Mình mới bị khóa tài khoản ngân hàng, đang rất gấp. Bạn cho mình mượn 200.000 đồng, chiều mình trả ngay. Đừng nói với ai nhé, mình ngại lắm.",
        dangerSignal: "Tạo tình huống khẩn cấp, đánh vào lòng thương và yêu cầu giữ bí mật là kỹ thuật thao túng cảm xúc thường gặp.",
        psychologicalTactic: "Tạo áp lực khẩn cấp (False Urgency) & Số tiền mồi nhỏ (Micro-scam)",
        options: [
            {
                text: "A. Chuyển tiền ngay vì thấy họ đang gặp khó",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã đưa ra quyết định tài chính dưới áp lực cảm xúc mà chưa xác minh danh tính.",
                scammerThought: "Chiêu số tiền nhỏ đánh trúng tâm lý 'không đáng là bao'! Khi họ đã chịu chuyển lần 1, ta sẽ tiếp tục bịa chuyện xin thêm 1-2 triệu nữa."
            },
            {
                text: "B. Hỏi số tài khoản và hẹn sẽ xem xét",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn chưa chuyển tiền, nhưng vẫn cho phép đối tượng tiếp tục dẫn dắt tình huống.",
                scammerThought: "Nạn nhân đang do dự. Ta sẽ gửi ảnh chụp màn hình số dư 0đ giả mạo và than thở khóc lóc để ép chuyển tiền ngay."
            },
            {
                text: "C. Gọi video hoặc liên hệ qua kênh độc lập để xác minh trước",
                riskScore: 0,
                level: "safe",
                feedback: "Xác minh độc lập là bước quan trọng khi có yêu cầu chuyển tiền khẩn cấp.",
                scammerThought: "Gọi video trực tiếp sẽ làm lộ mặt thật kẻ lừa đảo ngay lập tức! Phải viện cớ mạng lag hoặc từ chối cuộc gọi."
            }
        ]
    },
    {
        id: 6,
        senderName: "Ngọc Anh",
        senderMessage:
            "Nếu bạn không tiện chuyển khoản thì cho mình mượn tài khoản ngân hàng nhận hộ tiền từ chị gái. Mình gửi bạn 10% luôn, rất nhanh.",
        dangerSignal: "Cho mượn tài khoản ngân hàng để nhận/chuyển tiền có thể liên quan đến rửa tiền hoặc lừa đảo trung gian.",
        psychologicalTactic: "Mồi nhử hoa hồng (Greed Trap) & Dụ dỗ làm 'Con lừa tiền' (Money Mule)",
        options: [
            {
                text: "A. Đồng ý cho mượn tài khoản để nhận hộ",
                riskScore: 3,
                level: "danger",
                feedback: "Tài khoản của bạn có thể bị dùng trong giao dịch bất hợp pháp và gây rủi ro pháp lý cho chính bạn.",
                scammerThought: "Đã tìm được 'con lừa' rửa tiền hoàn hảo! Tiền từ vụ lừa đảo khác sẽ chảy qua tài khoản của họ, công an sẽ truy cứu chính chủ tài khoản này đầu tiên!"
            },
            {
                text: "B. Hỏi thêm về số tiền và người chuyển",
                riskScore: 1,
                level: "warning",
                feedback: "Việc hỏi thêm chưa giải quyết rủi ro cốt lõi: người lạ muốn dùng tài khoản của bạn.",
                scammerThought: "Họ có vẻ ham món hời 10%! Ta sẽ vẽ ra số tiền 20-30 triệu để hứa hẹn hoa hồng vài triệu đồng nhằm làm lóa mắt."
            },
            {
                text: "C. Từ chối, không cho bất kỳ ai sử dụng tài khoản ngân hàng",
                riskScore: 0,
                level: "safe",
                feedback: "Bạn đã bảo vệ tài khoản tài chính và tránh nguy cơ bị lôi kéo làm trung gian giao dịch.",
                scammerThought: "Con mồi này hiểu rõ rủi ro pháp lý của việc cho mượn tài khoản, không bị mồi nhử hoa hồng làm mờ mắt."
            }
        ]
    },
    {
        id: 7,
        senderName: "Ngọc Anh",
        senderMessage:
            "Mình vừa gửi mã xác nhận vào số của bạn nhầm rồi. Bạn đọc giúp mình mã OTP vừa nhận được nhé, không là mình mất tài khoản đó!",
        dangerSignal: "OTP là mã xác thực bí mật. Không một tổ chức hợp pháp nào yêu cầu bạn cung cấp OTP qua tin nhắn.",
        psychologicalTactic: "Chiếm đoạt mã xác thực 2 lớp (Account Takeover / OTP Theft)",
        options: [
            {
                text: "A. Đọc mã OTP vì nghĩ chỉ là gửi nhầm",
                riskScore: 3,
                level: "danger",
                feedback: "Bạn đã tiết lộ mã xác thực. Đây có thể khiến đối tượng truy cập tài khoản hoặc liên kết số điện thoại của bạn.",
                scammerThought: "Thành công 100%! Có mã OTP là ta đã chiếm trọn quyền kiểm soát tài khoản mạng xã hội hoặc ví điện tử của nạn nhân."
            },
            {
                text: "B. Hỏi mã đó dùng cho ứng dụng nào",
                riskScore: 2,
                level: "warning",
                feedback: "Ngay cả khi chỉ hỏi lại, bạn vẫn bị giữ trong tình huống gây áp lực liên quan đến OTP.",
                scammerThought: "Nạn nhân chưa đọc mã nhưng đang bối rối. Ta sẽ gào khóc kêu van rằng 'hết 60 giây là mất nick vĩnh viễn' để ép đọc nhanh."
            },
            {
                text: "C. Tuyệt đối không chia sẻ OTP và dừng cuộc trò chuyện",
                riskScore: 0,
                level: "safe",
                feedback: "Bạn đã tuân thủ nguyên tắc bảo mật quan trọng nhất: OTP không bao giờ được chia sẻ.",
                scammerThought: "Thất bại rồi! Người này hiểu bản chất OTP là chìa khóa then chốt, không đời nào họ chịu đọc."
            }
        ]
    },
    {
        id: 8,
        senderName: "Ngọc Anh",
        senderMessage:
            "Bạn đừng chặn mình vội. Mình thật sự tin bạn. Chuyện này chỉ hai đứa biết thôi, nếu bạn kể ai thì mình sẽ gặp rắc rối lớn.",
        dangerSignal: "Ép giữ bí mật và tạo cảm giác tội lỗi là dấu hiệu thao túng tâm lý nhằm ngăn nạn nhân tìm kiếm hỗ trợ.",
        psychologicalTactic: "Kỹ thuật cô lập nạn nhân (Social Isolation) & Thao túng tâm lý tội lỗi (Guilt-tripping)",
        options: [
            {
                text: "A. Đồng ý giữ bí mật và tiếp tục nghe giải thích",
                riskScore: 3,
                level: "danger",
                feedback: "Giữ bí mật khiến bạn bị cô lập, từ đó đối tượng dễ tiếp tục thao túng quyết định của bạn.",
                scammerThought: "Nạn nhân đã rơi vào chiếc bẫy cô lập! Khi không hỏi ý kiến ai, họ hoàn toàn bị ta thao túng tâm lý và kiểm soát hành động."
            },
            {
                text: "B. Không trả lời thêm nhưng chưa chặn tài khoản",
                riskScore: 1,
                level: "warning",
                feedback: "Bạn đã giảm tương tác, nhưng tài khoản vẫn có thể tiếp tục gửi tin nhắn và gây áp lực.",
                scammerThought: "Họ chưa dám chặn ta nghĩa là tâm lý còn day dứt hoặc sợ hãi. Ta có thể đổi giọng sang đe dọa hoặc tung tin giả để uy hiếp."
            },
            {
                text: "C. Chụp bằng chứng, chặn và báo cáo tài khoản",
                riskScore: 0,
                level: "safe",
                feedback: "Đây là phản ứng chủ động: dừng tiếp xúc, lưu bằng chứng và báo cáo hành vi đáng ngờ.",
                scammerThought: "Rất nguy hiểm! Họ chụp màn hình lưu bằng chứng và báo cáo tài khoản. Nick ảo này sắp bị khóa, phải phi tang ngay!"
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