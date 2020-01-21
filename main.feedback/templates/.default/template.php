<?
if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
?>
<div class="mfeedback">
<?if(!empty($arResult["ERROR_MESSAGE"]))
{
	foreach($arResult["ERROR_MESSAGE"] as $v)
		ShowError($v);
}
if(strlen($arResult["OK_MESSAGE"]) > 0)
{
	?>
  <div class="modal">
    <div class="modal__wrap">
      <div class="modal__close"></div>
      <div class="modal__img">
        <img src="<?=DEFAULT_TEMPLATE_PATH; ?>/assets/images/message-bg.png" alt="">
      </div>
      <div class="modal__title">
        <h2>
          ВАШЕ СООБЩЕНИЕ <br>
          ОТПРАВЛЕНО!
        </h2>
        <p>
          Спасибо за то, что написали нам, <br>
          мы ответим вам очень скоро
        </p>
        <a href="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
      </div>
    </div>
  </div>
    <?
}
?>

<form action="<?=POST_FORM_ACTION_URI?>" method="POST">
<?=bitrix_sessid_post()?>
  <div class="question__inputs">
    <input type="text" name="user_name" placeholder="Имя">
    <input type="text" name="user_last_name" placeholder="Фамилия">
    <input type="email" name="user_email" placeholder="E-mail">
    <input type="tel" name="user_phone" placeholder="Телефон">
  </div>
  <textarea name="MESSAGE" placeholder="Сообщение"></textarea>


	<?if($arParams["USE_CAPTCHA"] == "Y"):?>
	<div class="mf-captcha">
		<div class="mf-text"><?=GetMessage("MFT_CAPTCHA")?></div>
		<input type="hidden" name="captcha_sid" value="<?=$arResult["capCode"]?>">
		<img src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["capCode"]?>" width="180" height="40" alt="CAPTCHA">
		<div class="mf-text"><?=GetMessage("MFT_CAPTCHA_CODE")?><span class="mf-req">*</span></div>
		<input type="text" name="captcha_word" size="30" maxlength="50" value="">
	</div>
	<?endif;?>
	<input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
	<input type="submit" name="submit" id="submitForm" value="<?=GetMessage("MFT_SUBMIT")?>">
</form>
</div>

<script>
  $(document).ready(function()
  {
    $('.modal__close').click(function () {
      $('.modal').css('display', 'none');
    });
  });
</script>
