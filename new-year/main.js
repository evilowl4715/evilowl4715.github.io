$(function(){

    $("img").on("dragstart", function(event) { event.preventDefault(); });


    function whatPhone() {
        if (/iPhone|iPad/i.test(navigator.userAgent)) {

            $('.toy-current').css('filter', 'grayscale(0%)');
        }
    }
    whatPhone();

    let predictions = [
            'https://retailsanta.ru/prediction/prediction-1.png',
            'https://retailsanta.ru/prediction/prediction-2.png',
            'https://retailsanta.ru/prediction/prediction-3.png',
            'https://retailsanta.ru/prediction/prediction-4.png',
            'https://retailsanta.ru/prediction/prediction-5.png',
            'https://retailsanta.ru/prediction/prediction-6.png',
            'https://retailsanta.ru/prediction/prediction-7.png',
            'https://retailsanta.ru/prediction/prediction-8.png',
            'https://retailsanta.ru/prediction/prediction-9.png',
            'https://retailsanta.ru/prediction/prediction-10.png',
            'https://retailsanta.ru/prediction/prediction-11.png',
            'https://retailsanta.ru/prediction/prediction-12.png',
            'https://retailsanta.ru/prediction/prediction-13.png',
            'https://retailsanta.ru/prediction/prediction-14.png',
            'https://retailsanta.ru/prediction/prediction-15.png',
            'https://retailsanta.ru/prediction/prediction-16.png',
            'https://retailsanta.ru/prediction/prediction-17.png',
            'https://retailsanta.ru/prediction/prediction-18.png',
            'https://retailsanta.ru/prediction/prediction-19.png',
            'https://retailsanta.ru/prediction/prediction-20.png',
            'https://retailsanta.ru/prediction/prediction-21.png',
            'https://retailsanta.ru/prediction/prediction-22.png',
            'https://retailsanta.ru/prediction/prediction-23.png',
            'https://retailsanta.ru/prediction/prediction-24.png',
            'https://retailsanta.ru/prediction/prediction-25.png',
            'https://retailsanta.ru/prediction/prediction-26.png',
            'https://retailsanta.ru/prediction/prediction-27.png',
            'https://retailsanta.ru/prediction/prediction-28.png',
            'https://retailsanta.ru/prediction/prediction-29.png',
            'https://retailsanta.ru/prediction/prediction-30.png',
            'https://retailsanta.ru/prediction/prediction-31.png',
            'https://retailsanta.ru/prediction/prediction-32.png',
            'https://retailsanta.ru/prediction/prediction-33.png',
        ],
        randomPrediction = predictions[Math.floor( Math.random() * predictions.length )];
        $('.prediction').attr("src", randomPrediction);
        $('#download').attr("href", randomPrediction);


    $(".go").click(function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('.close').click(function () {
        $('.modal').removeClass('modal-open');
    });
    $('.close-btn').click(function () {
        $('.modal').removeClass('modal-open');
    });

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal').removeClass('modal-open');
        }
    });

    $('.go-toy').click(function(e) {
        e.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 400;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    function windowSizeModalClose(){
        if ($(window).width() > '1024'){
            setTimeout(function () {
                $('.modal').removeClass('modal-open');
            },1000);
        }
    }
    function windowSizeModalShake(){
        if ($(window).width() > '1024'){
            $(".modal__window").effect( "shake" );
        }
    }


    $(".toy").attr('disabled','disabled');

    $(".toy-current").removeAttr('disabled');
    $(".toy-active").removeAttr('disabled');

    $(".toy-1").click(function () {
        $("#question1").addClass('modal-open');
        $(".prompt").css('display', 'none');
    });

    $('#question1 input').click(function () {
        if($("input[name='question1']:checked").val() === "Монголия") {
            $("#question1 label[for='answer1']").addClass('answer-true');
            $("input[name='question1']").attr('disabled','disabled');
            $("#question1 label").removeClass('answer-false');
            $("#question1 .notification").text('Молодец!');
            $(".toy-1").removeClass('toy-current');
            $(".toy-1").addClass('toy-active');
            $(".toy-2").addClass('toy-current');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy1').click();
                },1050);
            }

        } else if($("input[name='question1']:checked").val() === "Корея") {
            windowSizeModalShake();
            $("#question1 label").removeClass('answer-false');
            $("#question1 label").removeClass('answer-true');
            $("label[for='answer2']").addClass('answer-false');
            $("#question1 .notification").text('Попробуй еще!');

        } else if($("input[name='question1']:checked").val() === "Китай") {
            windowSizeModalShake();
            $("#question1 label").removeClass('answer-false');
            $("#question1 label").removeClass('answer-true');
            $("label[for='answer3']").addClass('answer-false');
            $("#question1 .notification").text('Попробуй еще!');

        } else if($("input[name='question1']:checked").val() === "Аляска") {
            windowSizeModalShake();
            $("#question1 label").removeClass('answer-false');
            $("#question1 label").removeClass('answer-true');
            $("label[for='answer4']").addClass('answer-false');
            $("#question1 .notification").text('Попробуй еще!');
        }

    });



    $(".toy-2").click(function () {
        $("#question2").addClass('modal-open');
    });

    $('#question2 input').click(function () {
        if($("input[name='question2']:checked").val() === "Камбоджа") {
            $("#question2 label[for='Q2Answ2']").addClass('answer-true');
            $("input[name='question2']").attr('disabled','disabled');
            $("#question2 label").removeClass('answer-false');
            $(".toy-2").removeClass('toy-current');
            $(".toy-2").addClass('toy-active');
            $(".toy-3").addClass('toy-current');
            $("#question2 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy2').click();
                },1050);
            }
        } else if($("input[name='question2']:checked").val() === "Тайланд") {
            windowSizeModalShake();
            $("#question2 label").removeClass('answer-false');
            $("#question2 label").removeClass('answer-true');
            $("label[for='Q2Answ1']").addClass('answer-false');
            $("#question2 .notification").text('Попробуй еще!');

        } else if($("input[name='question2']:checked").val() === "Румыния") {
            windowSizeModalShake();
            $("#question2 label").removeClass('answer-false');
            $("#question2 label").removeClass('answer-true');
            $("label[for='Q2Answ3']").addClass('answer-false');
            $("#question2 .notification").text('Попробуй еще!');

        } else if($("input[name='question2']:checked").val() === "Венгрия") {
            windowSizeModalShake();
            $("#question2 label").removeClass('answer-false');
            $("#question2 label").removeClass('answer-true');
            $("label[for='Q2Answ4']").addClass('answer-false');
            $("#question2 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-3").click(function () {
        $("#question3").addClass('modal-open');
    });

    $('#question3 input').click(function () {
        if($("input[name='question3']:checked").val() === "Йоулупукки") {
            $("#question3 label[for='Q3Answ1']").addClass('answer-true');
            $("input[name='question3']").attr('disabled','disabled');
            $("#question3 label").removeClass('answer-false');
            $(".toy-3").removeClass('toy-current');
            $(".toy-3").addClass('toy-active');
            $(".toy-4").addClass('toy-current');
            $("#question3 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy3').click();
                },1050);
            }

        } else if($("input[name='question3']:checked").val() === "Ежишко") {
            windowSizeModalShake();
            $("#question3 label").removeClass('answer-false');
            $("#question3 label").removeClass('answer-true');
            $("label[for='Q3Answ2']").addClass('answer-false');
            $("#question3 .notification").text('Попробуй еще!');

        } else if($("input[name='question3']:checked").val() === "Фазер Кристмас") {
            windowSizeModalShake();
            $("#question3 label").removeClass('answer-false');
            $("#question3 label").removeClass('answer-true');
            $("label[for='Q3Answ3']").addClass('answer-false');
            $("#question3 .notification").text('Попробуй еще!');

        } else if($("input[name='question3']:checked").val() === "Сегацу") {
            windowSizeModalShake();
            $("#question3 label").removeClass('answer-false');
            $("#question3 label").removeClass('answer-true');
            $("label[for='Q3Answ4']").addClass('answer-false');
            $("#question3 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-4").click(function () {
        $("#question4").addClass('modal-open');
    });

    $('#question4 input').click(function () {
        if($("input[name='question4']:checked").val() === "В печи") {
            $("#question4 label[for='Q4Answ4']").addClass('answer-true');
            $("input[name='question4']").attr('disabled','disabled');
            $("#question4 label").removeClass('answer-false');
            $(".toy-4").removeClass('toy-current');
            $(".toy-4").addClass('toy-active');
            $(".toy-5").addClass('toy-current');
            $("#question4 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy4').click();
                },1050);
            }

        } else if($("input[name='question4']:checked").val() === "На подоконнике") {
            windowSizeModalShake();
            $("#question4 label").removeClass('answer-false');
            $("#question4 label").removeClass('answer-true');
            $("label[for='Q4Answ1']").addClass('answer-false');
            $("#question4 .notification").text('Попробуй еще!');

        } else if($("input[name='question4']:checked").val() === "В носке") {
            windowSizeModalShake();
            $("#question4 label").removeClass('answer-false');
            $("#question4 label").removeClass('answer-true');
            $("label[for='Q4Answ2']").addClass('answer-false');
            $("#question4 .notification").text('Попробуй еще!');

        } else if($("input[name='question4']:checked").val() === "В камине") {
            windowSizeModalShake();
            $("#question4 label").removeClass('answer-false');
            $("#question4 label").removeClass('answer-true');
            $("label[for='Q4Answ3']").addClass('answer-false');
            $("#question4 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-5").click(function () {
        $("#question5").addClass('modal-open');
    });

    $('#question5 input').click(function () {
        if($("input[name='question5']:checked").val() === "Имбирь") {
            $("#question5 label[for='Q5Answ3']").addClass('answer-true');
            $("input[name='question5']").attr('disabled','disabled');
            $("#question5 label").removeClass('answer-false');
            $(".toy-5").removeClass('toy-current');
            $(".toy-5").addClass('toy-active');
            $(".toy-6").addClass('toy-current');
            $("#question5 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy5').click();
                },1050);
            }

        } else if($("input[name='question5']:checked").val() === "Корица") {
            windowSizeModalShake();
            $("#question5 label").removeClass('answer-false');
            $("#question5 label").removeClass('answer-true');
            $("label[for='Q5Answ1']").addClass('answer-false');
            $("#question5 .notification").text('Попробуй еще!');

        } else if($("input[name='question5']:checked").val() === "Красный перец") {
            windowSizeModalShake();
            $("#question5 label").removeClass('answer-false');
            $("#question5 label").removeClass('answer-true');
            $("label[for='Q5Answ2']").addClass('answer-false');
            $("#question5 .notification").text('Попробуй еще!');

        } else if($("input[name='question5']:checked").val() === "Кардамон") {
            windowSizeModalShake();
            $("#question5 label").removeClass('answer-false');
            $("#question5 label").removeClass('answer-true');
            $("label[for='Q5Answ4']").addClass('answer-false');
            $("#question5 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-6").click(function () {
        $("#question6").addClass('modal-open');
    });

    $('#question6 input').click(function () {
        if($("input[name='question6']:checked").val() === "Гринч") {
            $("#question6 label[for='Q6Answ1']").addClass('answer-true');
            $("input[name='question6']").attr('disabled','disabled');
            $("#question6 label").removeClass('answer-false');
            $(".toy-6").removeClass('toy-current');
            $(".toy-6").addClass('toy-active');
            $(".toy-7").addClass('toy-current');
            $("#question6 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy6').click();
                },1050);
            }

        } else if($("input[name='question6']:checked").val() === "Гринвич") {
            windowSizeModalShake();
            $("#question6 label").removeClass('answer-false');
            $("#question6 label").removeClass('answer-true');
            $("label[for='Q6Answ2']").addClass('answer-false');
            $("#question6 .notification").text('Попробуй еще!');

        } else if($("input[name='question6']:checked").val() === "Санта Клаус") {
            windowSizeModalShake();
            $("#question6 label").removeClass('answer-false');
            $("#question6 label").removeClass('answer-true');
            $("label[for='Q6Answ3']").addClass('answer-false');
            $("#question6 .notification").text('Попробуй еще!');

        } else if($("input[name='question6']:checked").val() === "Кромешник") {
            windowSizeModalShake();
            $("#question6 label").removeClass('answer-false');
            $("#question6 label").removeClass('answer-true');
            $("label[for='Q6Answ4']").addClass('answer-false');
            $("#question6 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-7").click(function () {
        $("#question7").addClass('modal-open');
    });

    $('#question7 input').click(function () {
        if($("input[name='question7']:checked").val() === "в Китае") {
            $("#question7 label[for='Q7Answ4']").addClass('answer-true');
            $("input[name='question7']").attr('disabled','disabled');
            $("#question7 label").removeClass('answer-false');
            $(".toy-7").removeClass('toy-current');
            $(".toy-7").addClass('toy-active');
            $(".toy-8").addClass('toy-current');
            $("#question7 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy7').click();
                },1050);
            }

        } else if($("input[name='question7']:checked").val() === "в Японии") {
            windowSizeModalShake();
            $("#question7 label").removeClass('answer-false');
            $("#question7 label").removeClass('answer-true');
            $("label[for='Q7Answ1']").addClass('answer-false');
            $("#question7 .notification").text('Попробуй еще!');

        } else if($("input[name='question7']:checked").val() === "в Корее") {
            windowSizeModalShake();
            $("#question7 label").removeClass('answer-false');
            $("#question7 label").removeClass('answer-true');
            $("label[for='Q7Answ2']").addClass('answer-false');
            $("#question7 .notification").text('Попробуй еще!');

        } else if($("input[name='question7']:checked").val() === "в Германии") {
            windowSizeModalShake();
            $("#question7 label").removeClass('answer-false');
            $("#question7 label").removeClass('answer-true');
            $("label[for='Q7Answ3']").addClass('answer-false');
            $("#question7 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-8").click(function () {
        $("#question8").addClass('modal-open');
    });

    $('#question8 input').click(function () {
        if($("input[name='question8']:checked").val() === "Венгрия") {
            $("#question8 label[for='Q8Answ1']").addClass('answer-true');
            $("input[name='question8']").attr('disabled','disabled');
            $("#question8 label").removeClass('answer-false');
            $(".toy-8").removeClass('toy-current');
            $(".toy-8").addClass('toy-active');
            $(".toy-9").addClass('toy-current');
            $("#question8 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy8').click();
                },1050);
            }

        } else if($("input[name='question8']:checked").val() === "Норвегия") {
            windowSizeModalShake();
            $("#question8 label").removeClass('answer-false');
            $("#question8 label").removeClass('answer-true');
            $("label[for='Q8Answ2']").addClass('answer-false');
            $("#question8 .notification").text('Попробуй еще!');

        } else if($("input[name='question8']:checked").val() === "Швеция") {
            windowSizeModalShake();
            $("#question8 label").removeClass('answer-false');
            $("#question8 label").removeClass('answer-true');
            $("label[for='Q8Answ3']").addClass('answer-false');
            $("#question8 .notification").text('Попробуй еще!');

        } else if($("input[name='question8']:checked").val() === "Россия") {
            windowSizeModalShake();
            $("#question8 label").removeClass('answer-false');
            $("#question8 label").removeClass('answer-true');
            $("label[for='Q8Answ4']").addClass('answer-false');
            $("#question8 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-9").click(function () {
        $("#question9").addClass('modal-open');
    });

    $('#question9 input').click(function () {
        if($("input[name='question9']:checked").val() === "Новой Зеландии и Фиджи") {
            $("#question9 label[for='Q9Answ1']").addClass('answer-true');
            $("input[name='question9']").attr('disabled','disabled');
            $("#question9 label").removeClass('answer-false');
            $(".toy-9").removeClass('toy-current');
            $(".toy-9").addClass('toy-active');
            $(".toy-10").addClass('toy-current');
            $("#question9 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy9').click();
                },1050);
            }

        } else if($("input[name='question9']:checked").val() === "Японии и России") {
            windowSizeModalShake();
            $("#question9 label").removeClass('answer-false');
            $("#question9 label").removeClass('answer-true');
            $("label[for='Q9Answ2']").addClass('answer-false');
            $("#question9 .notification").text('Попробуй еще!');

        } else if($("input[name='question9']:checked").val() === "Китая и Индонезии") {
            windowSizeModalShake();
            $("#question9 label").removeClass('answer-false');
            $("#question9 label").removeClass('answer-true');
            $("label[for='Q9Answ3']").addClass('answer-false');
            $("#question9 .notification").text('Попробуй еще!');

        } else if($("input[name='question9']:checked").val() === "Австралии и Папуа Новой Гвинеи") {
            windowSizeModalShake();
            $("#question9 label").removeClass('answer-false');
            $("#question9 label").removeClass('answer-true');
            $("label[for='Q9Answ4']").addClass('answer-false');
            $("#question9 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-10").click(function () {
        $("#question10").addClass('modal-open');
    });

    $('#question10 input').click(function () {
        if($("input[name='question10']:checked").val() === "Омела") {
            $("#question10 label[for='Q10Answ1']").addClass('answer-true');
            $("input[name='question10']").attr('disabled','disabled');
            $("#question10 label").removeClass('answer-false');
            $(".toy-10").removeClass('toy-current');
            $(".toy-10").addClass('toy-active');
            $(".toy-11").addClass('toy-current');
            $("#question10 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy10').click();
                },1050);
            }
        } else if($("input[name='question10']:checked").val() === "Кипарис") {
            windowSizeModalShake();
            $("#question10 label").removeClass('answer-false');
            $("#question10 label").removeClass('answer-true');
            $("label[for='Q10Answ2']").addClass('answer-false');
            $("#question10 .notification").text('Попробуй еще!');

        } else if($("input[name='question10']:checked").val() === "Остролист") {
            windowSizeModalShake();
            $("#question10 label").removeClass('answer-false');
            $("#question10 label").removeClass('answer-true');
            $("label[for='Q10Answ3']").addClass('answer-false');
            $("#question10 .notification").text('Попробуй еще!');

        } else if($("input[name='question10']:checked").val() === "Туя") {
            windowSizeModalShake();
            $("#question10 label").removeClass('answer-false');
            $("#question10 label").removeClass('answer-true');
            $("label[for='Q10Answ4']").addClass('answer-false');
            $("#question10 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-11").click(function () {
        $("#question11").addClass('modal-open');
    });

    $('#question11 input').click(function () {
        if($("input[name='question11']:checked").val() === "в Англии") {
            $("#question11 label[for='Q11Answ2']").addClass('answer-true');
            $("input[name='question11']").attr('disabled','disabled');
            $("#question11 label").removeClass('answer-false');
            $(".toy-11").removeClass('toy-current');
            $(".toy-11").addClass('toy-active');
            $(".toy-12").addClass('toy-current');
            $("#question11 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy11').click();
                },1050);
            }

        } else if($("input[name='question11']:checked").val() === "в Германии") {
            windowSizeModalShake();
            $("#question11 label").removeClass('answer-false');
            $("#question11 label").removeClass('answer-true');
            $("label[for='Q11Answ1']").addClass('answer-false');
            $("#question11 .notification").text('Попробуй еще!');

        } else if($("input[name='question11']:checked").val() === "в Швеции") {
            windowSizeModalShake();
            $("#question11 label").removeClass('answer-false');
            $("#question11 label").removeClass('answer-true');
            $("label[for='Q11Answ3']").addClass('answer-false');
            $("#question11 .notification").text('Попробуй еще!');

        } else if($("input[name='question11']:checked").val() === "в Армении") {
            windowSizeModalShake();
            $("#question11 label").removeClass('answer-false');
            $("#question11 label").removeClass('answer-true');
            $("label[for='Q11Answ4']").addClass('answer-false');
            $("#question11 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-12").click(function () {
        $("#question12").addClass('modal-open');
    });

    $('#question12 input').click(function () {
        if($("input[name='question12']:checked").val() === "Ледяной Джек") {
            $("#question12 label[for='Q12Answ1']").addClass('answer-true');
            $("input[name='question12']").attr('disabled','disabled');
            $("#question12 label").removeClass('answer-false');
            $(".toy-12").removeClass('toy-current');
            $(".toy-12").addClass('toy-active');
            $(".toy-13").addClass('toy-current');
            $("#question12 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy12').click();
                },1050);
            }

        } else if($("input[name='question12']:checked").val() === "Джек Воробей") {
            windowSizeModalShake();
            $("#question12 label").removeClass('answer-false');
            $("#question12 label").removeClass('answer-true');
            $("label[for='Q12Answ2']").addClass('answer-false');
            $("#question12 .notification").text('Попробуй еще!');

        } else if($("input[name='question12']:checked").val() === "Джон Сноу") {
            windowSizeModalShake();
            $("#question12 label").removeClass('answer-false');
            $("#question12 label").removeClass('answer-true');
            $("label[for='Q12Answ3']").addClass('answer-false');
            $("#question12 .notification").text('Попробуй еще!');

        } else if($("input[name='question12']:checked").val() === "Джон Ватсон") {
            windowSizeModalShake();
            $("#question12 label").removeClass('answer-false');
            $("#question12 label").removeClass('answer-true');
            $("label[for='Q12Answ4']").addClass('answer-false');
            $("#question12 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-13").click(function () {
        $("#question13").addClass('modal-open');
    });

    $('#question13 input').click(function () {
        if($("input[name='question13']:checked").val() === "-5") {
            $("#question13 label[for='Q13Answ1']").addClass('answer-true');
            $("input[name='question13']").attr('disabled','disabled');
            $("#question13 label").removeClass('answer-false');
            $(".toy-13").removeClass('toy-current');
            $(".toy-13").addClass('toy-active');
            $(".toy-14").addClass('toy-current');
            $("#question13 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy13').click();
                },1050);
            }

        } else if($("input[name='question13']:checked").val() === "-10") {
            windowSizeModalShake();
            $("#question13 label").removeClass('answer-false');
            $("#question13 label").removeClass('answer-true');
            $("label[for='Q13Answ2']").addClass('answer-false');
            $("#question13 .notification").text('Попробуй еще!');

        } else if($("input[name='question13']:checked").val() === "-15") {
            windowSizeModalShake();
            $("#question13 label").removeClass('answer-false');
            $("#question13 label").removeClass('answer-true');
            $("label[for='Q13Answ3']").addClass('answer-false');
            $("#question13 .notification").text('Попробуй еще!');

        } else if($("input[name='question13']:checked").val() === "-20") {
            windowSizeModalShake();
            $("#question13 label").removeClass('answer-false');
            $("#question13 label").removeClass('answer-true');
            $("label[for='Q13Answ4']").addClass('answer-false');
            $("#question13 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-14").click(function () {
        $("#question14").addClass('modal-open');
    });

    $('#question14 input').click(function () {
        if($("input[name='question14']:checked").val() === "Нью-Йорк") {
            $("#question14 label[for='Q14Answ3']").addClass('answer-true');
            $("input[name='question14']").attr('disabled','disabled');
            $("#question14 label").removeClass('answer-false');
            $(".toy-14").removeClass('toy-current');
            $(".toy-14").addClass('toy-active');
            $(".toy-15").addClass('toy-current');
            $("#question14 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy14').click();
                },1050);
            }

        } else if($("input[name='question14']:checked").val() === "Остался дома") {
            windowSizeModalShake();
            $("#question14 label").removeClass('answer-false');
            $("#question14 label").removeClass('answer-true');
            $("label[for='Q14Answ1']").addClass('answer-false');
            $("#question14 .notification").text('Попробуй еще!');

        } else if($("input[name='question14']:checked").val() === "Пекин") {
            windowSizeModalShake();
            $("#question14 label").removeClass('answer-false');
            $("#question14 label").removeClass('answer-true');
            $("label[for='Q14Answ2']").addClass('answer-false');
            $("#question14 .notification").text('Попробуй еще!');

        } else if($("input[name='question14']:checked").val() === "Москва к бабушке") {
            windowSizeModalShake();
            $("#question14 label").removeClass('answer-false');
            $("#question14 label").removeClass('answer-true');
            $("label[for='Q14Answ4']").addClass('answer-false');
            $("#question14 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-15").click(function () {
        $("#question15").addClass('modal-open');
    });

    $('#question15 input').click(function () {
        if($("input[name='question15']:checked").val() === "Чайковский") {
            $("#question15 label[for='Q15Answ2']").addClass('answer-true');
            $("input[name='question15']").attr('disabled','disabled');
            $("#question15 label").removeClass('answer-false');
            $(".toy-15").removeClass('toy-current');
            $(".toy-15").addClass('toy-active');
            $(".toy-16").addClass('toy-current');
            $("#question15 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy15').click();
                },1050);
            }

        } else if($("input[name='question15']:checked").val() === "Чуковский") {
            windowSizeModalShake();
            $("#question15 label").removeClass('answer-false');
            $("#question15 label").removeClass('answer-true');
            $("label[for='Q15Answ1']").addClass('answer-false');
            $("#question15 .notification").text('Попробуй еще!');

        } else if($("input[name='question15']:checked").val() === "Чачаковский") {
            windowSizeModalShake();
            $("#question15 label").removeClass('answer-false');
            $("#question15 label").removeClass('answer-true');
            $("label[for='Q15Answ3']").addClass('answer-false');
            $("#question15 .notification").text('Попробуй еще!');

        } else if($("input[name='question15']:checked").val() === "Чуйковский") {
            windowSizeModalShake();
            $("#question15 label").removeClass('answer-false');
            $("#question15 label").removeClass('answer-true');
            $("label[for='Q15Answ4']").addClass('answer-false');
            $("#question15 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-16").click(function () {
        $("#question16").addClass('modal-open');
    });

    $('#question16 input').click(function () {
        if($("input[name='question16']:checked").val() === "Иван Васильевич меняет профессию") {
            $("#question16 label[for='Q16Answ4']").addClass('answer-true');
            $("input[name='question16']").attr('disabled','disabled');
            $("#question16 label").removeClass('answer-false');
            $(".toy-16").removeClass('toy-current');
            $(".toy-16").addClass('toy-active');
            $(".toy-17").addClass('toy-current');
            $("#question16 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy16').click();
                },1050);
            }

        } else if($("input[name='question16']:checked").val() === "Приключения Шерлока Холмса") {
            windowSizeModalShake();
            $("#question16 label").removeClass('answer-false');
            $("#question16 label").removeClass('answer-true');
            $("label[for='Q16Answ1']").addClass('answer-false');
            $("#question16 .notification").text('Попробуй еще!');

        } else if($("input[name='question16']:checked").val() === "Гусарская баллада") {
            windowSizeModalShake();
            $("#question16 label").removeClass('answer-false');
            $("#question16 label").removeClass('answer-true');
            $("label[for='Q16Answ2']").addClass('answer-false');
            $("#question16 .notification").text('Попробуй еще!');

        } else if($("input[name='question16']:checked").val() === "Холоп") {
            windowSizeModalShake();
            $("#question16 label").removeClass('answer-false');
            $("#question16 label").removeClass('answer-true');
            $("label[for='Q16Answ3']").addClass('answer-false');
            $("#question16 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-17").click(function () {
        $("#question17").addClass('modal-open');
    });

    $('#question17 input').click(function () {
        if($("input[name='question17']:checked").val() === "Зелёной") {
            $("#question17 label[for='Q17Answ3']").addClass('answer-true');
            $("input[name='question17']").attr('disabled','disabled');
            $("#question17 label").removeClass('answer-false');
            $(".toy-17").removeClass('toy-current');
            $(".toy-17").addClass('toy-active');
            $(".toy-18").addClass('toy-current');
            $("#question17 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy17').click();
                },1050);
            }

        } else if($("input[name='question17']:checked").val() === "Белой") {
            windowSizeModalShake();
            $("#question17 label").removeClass('answer-false');
            $("#question17 label").removeClass('answer-true');
            $("label[for='Q17Answ1']").addClass('answer-false');
            $("#question17 .notification").text('Попробуй еще!');

        } else if($("input[name='question17']:checked").val() === "Синей") {
            windowSizeModalShake();
            $("#question17 label").removeClass('answer-false');
            $("#question17 label").removeClass('answer-true');
            $("label[for='Q17Answ2']").addClass('answer-false');
            $("#question17 .notification").text('Попробуй еще!');

        } else if($("input[name='question17']:checked").val() === "Красной") {
            windowSizeModalShake();
            $("#question17 label").removeClass('answer-false');
            $("#question17 label").removeClass('answer-true');
            $("label[for='Q17Answ4']").addClass('answer-false');
            $("#question17 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-18").click(function () {
        $("#question18").addClass('modal-open');
    });

    $('#question18 input').click(function () {
        if($("input[name='question18']:checked").val() === "Италия") {
            $("#question18 label[for='Q18Answ1']").addClass('answer-true');
            $("input[name='question18']").attr('disabled','disabled');
            $("#question18 label").removeClass('answer-false');
            $(".toy-18").removeClass('toy-current');
            $(".toy-18").addClass('toy-active');
            $(".toy-19").addClass('toy-current');
            $("#question18 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy18').click();
                },1050);
            }

        } else if($("input[name='question18']:checked").val() === "Испания") {
            windowSizeModalShake();
            $("#question18 label").removeClass('answer-false');
            $("#question18 label").removeClass('answer-true');
            $("label[for='Q18Answ2']").addClass('answer-false');
            $("#question18 .notification").text('Попробуй еще!');

        } else if($("input[name='question18']:checked").val() === "Франция") {
            windowSizeModalShake();
            $("#question18 label").removeClass('answer-false');
            $("#question18 label").removeClass('answer-true');
            $("label[for='Q18Answ3']").addClass('answer-false');
            $("#question18 .notification").text('Попробуй еще!');

        } else if($("input[name='question18']:checked").val() === "Германия") {
            windowSizeModalShake();
            $("#question18 label").removeClass('answer-false');
            $("#question18 label").removeClass('answer-true');
            $("label[for='Q18Answ4']").addClass('answer-false');
            $("#question18 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-19").click(function () {
        $("#question19").addClass('modal-open');
    });

    $('#question19 input').click(function () {
        if($("input[name='question19']:checked").val() === "Венгрия") {
            $("#question19 label[for='Q19Answ2']").addClass('answer-true');
            $("input[name='question19']").attr('disabled','disabled');
            $("#question19 label").removeClass('answer-false');
            $(".toy-19").removeClass('toy-current');
            $(".toy-19").addClass('toy-active');
            $(".toy-20").addClass('toy-current');
            $("#question19 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy19').click();
                },1050);
            }

        } else if($("input[name='question19']:checked").val() === "Чехия") {
            windowSizeModalShake();
            $("#question19 label").removeClass('answer-false');
            $("#question19 label").removeClass('answer-true');
            $("label[for='Q19Answ1']").addClass('answer-false');
            $("#question19 .notification").text('Попробуй еще!');

        } else if($("input[name='question19']:checked").val() === "Швейцария") {
            windowSizeModalShake();
            $("#question19 label").removeClass('answer-false');
            $("#question19 label").removeClass('answer-true');
            $("label[for='Q19Answ3']").addClass('answer-false');
            $("#question19 .notification").text('Попробуй еще!');

        } else if($("input[name='question19']:checked").val() === "Китай") {
            windowSizeModalShake();
            $("#question19 label").removeClass('answer-false');
            $("#question19 label").removeClass('answer-true');
            $("label[for='Q19Answ4']").addClass('answer-false');
            $("#question19 .notification").text('Попробуй еще!');
        }

    });


    $(".toy-20").click(function () {
        $("#question20").addClass('modal-open');
    });

    $('#question20 input').click(function () {
        if($("input[name='question20']:checked").val() === "Сентябрь") {
            $("#question20 label[for='Q20Answ1']").addClass('answer-true');
            $("input[name='question20']").attr('disabled','disabled');
            $("#question20 label").removeClass('answer-false');
            $(".toy-20").removeClass('toy-current');
            $(".toy-20").addClass('toy-active');
            $(".toy-21").addClass('toy-current');
            $("#question20 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy20').click();
                },1050);
            }

        } else if($("input[name='question20']:checked").val() === "Декабрь") {
            windowSizeModalShake();
            $("#question20 label").removeClass('answer-false');
            $("#question20 label").removeClass('answer-true');
            $("label[for='Q20Answ2']").addClass('answer-false');
            $("#question20 .notification").text('Попробуй еще!');

        } else if($("input[name='question20']:checked").val() === "Январь") {
            windowSizeModalShake();
            $("#question20 label").removeClass('answer-false');
            $("#question20 label").removeClass('answer-true');
            $("label[for='Q20Answ3']").addClass('answer-false');
            $("#question20 .notification").text('Попробуй еще!');

        } else if($("input[name='question20']:checked").val() === "Июнь") {
            windowSizeModalShake();
            $("#question20 label").removeClass('answer-false');
            $("#question20 label").removeClass('answer-true');
            $("label[for='Q20Answ4']").addClass('answer-false');
            $("#question20 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-21").click(function () {
        $("#question21").addClass('modal-open');
    });

    $('#question21 input').click(function () {
        if($("input[name='question21']:checked").val() === "Кострома") {
            $("#question21 label[for='Q21Answ4']").addClass('answer-true');
            $("input[name='question21']").attr('disabled','disabled');
            $("#question21 label").removeClass('answer-false');
            $(".toy-21").removeClass('toy-current');
            $(".toy-21").addClass('toy-active');
            $(".toy-22").addClass('toy-current');
            $("#question21 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy21').click();
                },1050);
            }

        } else if($("input[name='question21']:checked").val() === "Ярославль") {
            windowSizeModalShake();
            $("#question21 label").removeClass('answer-false');
            $("#question21 label").removeClass('answer-true');
            $("label[for='Q21Answ1']").addClass('answer-false');
            $("#question21 .notification").text('Попробуй еще!');

        } else if($("input[name='question21']:checked").val() === "Великий Устюг") {
            windowSizeModalShake();
            $("#question21 label").removeClass('answer-false');
            $("#question21 label").removeClass('answer-true');
            $("label[for='Q21Answ2']").addClass('answer-false');
            $("#question21 .notification").text('Попробуй еще!');

        } else if($("input[name='question21']:checked").val() === "Новосибирск") {
            windowSizeModalShake();
            $("#question21 label").removeClass('answer-false');
            $("#question21 label").removeClass('answer-true');
            $("label[for='Q21Answ3']").addClass('answer-false');
            $("#question21 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-22").click(function () {
        $("#question22").addClass('modal-open');
    });

    $('#question22 input').click(function () {
        if($("input[name='question22']:checked").val() === "Испания и Куба") {
            $("#question22 label[for='Q22Answ3']").addClass('answer-true');
            $("input[name='question22']").attr('disabled','disabled');
            $("#question22 label").removeClass('answer-false');
            $(".toy-22").removeClass('toy-current');
            $(".toy-22").addClass('toy-active');
            $(".toy-23").addClass('toy-current');
            $("#question22 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy22').click();
                },1050);
            }

        } else if($("input[name='question22']:checked").val() === "США и Великобритания") {
            windowSizeModalShake();
            $("#question22 label").removeClass('answer-false');
            $("#question22 label").removeClass('answer-true');
            $("label[for='Q22Answ1']").addClass('answer-false');
            $("#question22 .notification").text('Попробуй еще!');

        } else if($("input[name='question22']:checked").val() === "Франция и Швейцария") {
            windowSizeModalShake();
            $("#question22 label").removeClass('answer-false');
            $("#question22 label").removeClass('answer-true');
            $("label[for='Q22Answ2']").addClass('answer-false');
            $("#question22 .notification").text('Попробуй еще!');

        } else if($("input[name='question22']:checked").val() === "Аргентина и Италия") {
            windowSizeModalShake();
            $("#question22 label").removeClass('answer-false');
            $("#question22 label").removeClass('answer-true');
            $("label[for='Q22Answ4']").addClass('answer-false');
            $("#question22 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-23").click(function () {
        $("#question23").addClass('modal-open');
    });

    $('#question23 input').click(function () {
        if($("input[name='question23']:checked").val() === "1895") {
            $("#question23 label[for='Q23Answ1']").addClass('answer-true');
            $("input[name='question23']").attr('disabled','disabled');
            $("#question23 label").removeClass('answer-false');
            $(".toy-23").removeClass('toy-current');
            $(".toy-23").addClass('toy-active');
            $(".toy-24").addClass('toy-current');
            $("#question23 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy23').click();
                },1050);
            }

        } else if($("input[name='question23']:checked").val() === "1920") {
            windowSizeModalShake();
            $("#question23 label").removeClass('answer-false');
            $("#question23 label").removeClass('answer-true');
            $("label[for='Q23Answ2']").addClass('answer-false');
            $("#question23 .notification").text('Попробуй еще!');

        } else if($("input[name='question23']:checked").val() === "1855") {
            windowSizeModalShake();
            $("#question23 label").removeClass('answer-false');
            $("#question23 label").removeClass('answer-true');
            $("label[for='Q23Answ3']").addClass('answer-false');
            $("#question23 .notification").text('Попробуй еще!');

        } else if($("input[name='question23']:checked").val() === "1905") {
            windowSizeModalShake();
            $("#question23 label").removeClass('answer-false');
            $("#question23 label").removeClass('answer-true');
            $("label[for='Q23Answ4']").addClass('answer-false');
            $("#question23 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-24").click(function () {
        $("#question24").addClass('modal-open');
    });

    $('#question24 input').click(function () {
        if($("input[name='question24']:checked").val() === "Германия") {
            $("#question24 label[for='Q24Answ2']").addClass('answer-true');
            $("input[name='question24']").attr('disabled','disabled');
            $("#question24 label").removeClass('answer-false');
            $(".toy-24").removeClass('toy-current');
            $(".toy-24").addClass('toy-active');
            $(".toy-25").addClass('toy-current');
            $("#question24 .notification").text('Молодец!');
            $(".toy-current").removeAttr('disabled');
            $(".toy-active").removeAttr('disabled');
            windowSizeModalClose();
            whatPhone();
            if ($(window).width() > '1024'){
                setTimeout(function () {
                    $('#goToy24').click();
                },1050);
            }

        } else if($("input[name='question24']:checked").val() === "Китай") {
            windowSizeModalShake();
            $("#question24 label").removeClass('answer-false');
            $("#question24 label").removeClass('answer-true');
            $("label[for='Q24Answ1']").addClass('answer-false');
            $("#question24 .notification").text('Попробуй еще!');

        } else if($("input[name='question24']:checked").val() === "Русь") {
            windowSizeModalShake();
            $("#question24 label").removeClass('answer-false');
            $("#question24 label").removeClass('answer-true');
            $("label[for='Q24Answ3']").addClass('answer-false');
            $("#question24 .notification").text('Попробуй еще!');

        } else if($("input[name='question24']:checked").val() === "Дания") {
            windowSizeModalShake();
            $("#question24 label").removeClass('answer-false');
            $("#question24 label").removeClass('answer-true');
            $("label[for='Q24Answ4']").addClass('answer-false');
            $("#question24 .notification").text('Попробуй еще!');
        }

    });

    $(".toy-25").click(function () {
        $("#question25").addClass('modal-open');
    });

    $('#question25 input').click(function () {
        if($("input[name='question25']:checked").val() === "В Швеции") {
            $("#question25 label[for='Q25Answ1']").addClass('answer-true');
            $("input[name='question25']").attr('disabled','disabled');
            $("#question25 label").removeClass('answer-false');
            $(".toy-25").removeClass('toy-current');
            $(".toy-25").addClass('toy-active');
            $("#question25 .notification").text('Молодец!');
            $(".answer-link").text('Получить предсказание!');
            $(".toy-active").removeAttr('disabled');
            $(".answer-link").click(function (event) {
                event.preventDefault();
                let id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1000);
                $('#question25').removeClass('modal-open');
                setTimeout(function () {
                    $('.gift-big').addClass('gift-big-open');
                    $('.cover').addClass('cover-open');
                    $('.modal-end').addClass('modal-open');
                }, 800)
            });

        } else if($("input[name='question25']:checked").val() === "В Англии") {
            windowSizeModalShake();
            $("#question25 label").removeClass('answer-false');
            $("#question25 label").removeClass('answer-true');
            $("label[for='Q25Answ2']").addClass('answer-false');
            $("#question25 .notification").text('Попробуй еще!');

        } else if($("input[name='question25']:checked").val() === "В США") {
            windowSizeModalShake();
            $("#question25 label").removeClass('answer-false');
            $("#question25 label").removeClass('answer-true');
            $("label[for='Q25Answ3']").addClass('answer-false');
            $("#question25 .notification").text('Попробуй еще!');

        } else if($("input[name='question25']:checked").val() === "Во Франции") {
            windowSizeModalShake();
            $("#question25 label").removeClass('answer-false');
            $("#question25 label").removeClass('answer-true');
            $("label[for='Q25Answ4']").addClass('answer-false');
            $("#question25 .notification").text('Попробуй еще!');
        }

    });


    let img = document.getElementsByTagName('img');

    for(let i in img)
    {
        img[i].oncontextmenu = function()
        {
            return false;
        }
    }


});
