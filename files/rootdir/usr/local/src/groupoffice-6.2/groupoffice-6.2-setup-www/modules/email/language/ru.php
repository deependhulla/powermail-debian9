<?php


$l['name'] = 'Почта';
$l['description'] = 'Модуль Почта; Небольшой e-mail клиент. Любой пользователь может принимать и отправлять почтовые сообщения';
$lang['link_type'][9]='Почта';
$l['feedbackNoReciepent'] = 'Вы не указали получателя';
$l['feedbackSMTPProblem'] = 'Невозможно связаться с SMTP сервером: ';
$l['feedbackUnexpectedError'] = 'Произошла непредвиденная ошибка при формировании почтового сообщения: ';
$l['feedbackCreateFolderFailed'] = 'Невозможно создать папку';
$l['feedbackDeleteFolderFailed'] = 'Невозможно удалить папку';
$l['feedbackSubscribeFolderFailed'] = 'Невозможно подписаться на папку';
$l['feedbackUnsubscribeFolderFailed'] = 'Невозможно отменить подписку на папку';
$l['feedbackCannotConnect'] = 'Невозможно соединиться с %1$ по порту %3$s<br /><br />Почтовый сервер вернул: %2$s';
$l['spam']='Спам';
$l['trash']='Корзина';
$l['sent']='Отправленные';
$l['drafts']='Черновики';
$l['no_subject']='Нет темы';
$l['no_recipients']='Не указаны получатели';
$l['original_message']='--- Далее оригинал ---';
$l['notification_subject']='Читать: %s';
$l['notification_body']='Ваше сообщение с темой "%s" прочитано в %s';
$l['errorGettingMessage']='Невозможно получить сообщение';
$l['no_recipients_drafts']='Нет получателей';
$l['usage_limit'] = '%s из %s занято';
$l['event']='Событие';
$l['calendar']='календарь';
$l['quotaError']="Ваш почтовый ящик заполнен. Для начала очистите корзину. Если она пустая и Ваш почтовый ящик все еще заполнен, отключите использование папки Корзина в:\n\nНастройки -> Учетные записи -> учетная запись -> Папки и удалите ненужные сообщения в других папках.";
$l['draftsDisabled']="Невозможно сохранить сообщение т.к. отключена папка 'Черновики' .<br /><br />Настройте ее в Настройки -> Учетные записи -> Учетная запись -> Папки.";
$l['noSaveWithPop3']='Невозможно сохранить сообщение т.к. учетные записи POP3 не поддерживают данную функцию.';
$l['goAlreadyStarted']='{product_name} уже запущен и в нем открыт редактор e-mail сообщений. Закройте это окно и напишите Ваше сообщение в {product_name}.';
$l['replyHeader']='В %s, %s на %s %s писал:';
$l['noUidNext']='Ваш почтовый сервер не поддерживает UIDNEXT. Папка \'Черновики\' для данной учетной записи автоматически отключена.';
$l['disable_trash_folder']='Не удалось переместить Ваше письмо в Корзину. Возможно у Вас закончилось свободное место. Вы можете освободить место отключив использование папки Корзина в:\n\nНастройки -> Учетные записи -> Учетная запись -> Папки и удалить ненужные сообщения в других папках.';
$l['error_move_folder']='Не возможно переместить папку';
$l['error_getaddrinfo']='Указан неверный адрес хоста';
$l['error_authentication']='Неверное имя пользователя или пароль';
$l['error_connection_refused']='В соединении отказано. Пожалуйста, проверьте адрес хоста и номер порта.';
$l['iCalendar_event_invitation']='Это сообщение содержит приглашение на событие.';
$l['iCalendar_event_not_found']='Это сообщение содержит обновление для несуществующего события.';
$l['iCalendar_update_available']='Это сообщение содержит обновление для существующего события.';
$l['iCalendar_update_old']='Это сообщение содержит обновление для уже произошедшего события.';
$l['iCalendar_event_cancelled']='Это сообщение содержит отмену для события..';
$l['iCalendar_event_invitation_declined']='Это сообщение содержит приглашение на событие, которое Вы отклонили.';
$l["messages"]='Сообщения';
$l["message"]='Сообщение';
$l["inbox"]='Входящие';
$l["accounts"]='Учетные записи';
$l["account"]='Учетная запись E-mail';
$l["crossAccountMove"]='Извините, Вы не можете переместить сообщения в другую учетную запись';
$l["compose"]='Новое';
$l["reply"]='Ответить';
$l["replyAll"]='Ответить всем';
$l["markAsRead"]='Отметить как прочитанное';
$l["markAsUnread"]='Отметить как непрочитанное';
$l["flag"]='Добавить отметку';
$l["unflag"]='Удалить отметку';
$l["flagged"]='Установлена отметка';
$l["unflagged"]='Не установлена отметка';
$l["root"]='Корень';
$l["folders"]='Папки';
$l["filter"]='Фильтр';
$l["filters"]='Фильтры';
$l["selectFolderDelete"]='Выберите папку для удаления';
$l["selectFolderAdd"]='Сначала выберите папку из дерева, в которую Вы хотите добавить новую папку, а затем нажмите \'Добавить\'';
$l["selectFolderRename"]='Выберите папку для переименования';
$l["forward"]='Переслать';
$l["resetSearch"]='Сбросить фильтр';
$l["emailMessage"]='E-mail сообщение';
$l["host"]='Сервер';
$l["field"]='Поле';
$l["contains"]='Содержит';
$l["moveToFolder"]='Переместить в папку';
$l["incomingMail"]='Входящее сообщение';
$l["advanced"]='Расширенные настройки';
$l["ssl"]='SSL';
$l["tls"]='TLS';
$l["novalidateCert"]='Не проверять сертификат';
$l["port"]='Порт';
$l["rootMailbox"]='Корневой почтовый ящик';
$l["manageFolders"]='Управление папками';
$l["sendItemsFolder"]='Папка Отправленные';
$l["trashFolder"]='Папка Корзина';
$l["draftsFolder"]='Папка Черновики';
$l["sender"]='От';
$l["subject"]='Тема';
$l["toField"]='Поле Кому';
$l["ccField"]='Поле Копия';
$l["bccField"]='Поле BCC';
$l["keyword"]='Ключевое слово';
$l["notification"]='Запросить уведомление о прочтении';
$l["high"]='Высокий';
$l["normal"]='Нормальный';
$l["low"]='Низкий';
$l["from"]='От';
$l["sendTo"]='Отправить ';
$l["cc"]='Копия';
$l["bcc"]='BCC';
$l["selectTemplate"]='Выберите шаблон';
$l["composeEmail"]='Написать e-mail сообщение';
$l["send"]='Отправить';
$l["extraOptions"]='Дополнительные настройки';
$l["attachments"]='Вложения';
$l["show"]='Показать';
$l["noAccount"]='Вы не настроили учетную запись для e-mail . Перейдите в  Почта -> Учетные записи и настройте учетную запись для e-mail';
$l["attachFiles"]='Присоединить файл с Вашего компьютера';
$l["uploadAttachments"]='Добавить вложения';
$l["startTransfer"]='Начать передачу';
$l["cantEditFolder"]='Вы не можете редактировать эту папку';
$l["cantDeleteInboxFolder"]='Вы не можете удалить папку Входящие';
$l["cantRenameInboxFolder"]='Вы не можете переименовать папку Входящие';
$l["enterFolderName"]='Введите имя папки:';
$l["addFolder"]='Добавить папку';
$l["to"]='Кому';
$l["downloadAllAsZip"]='Загрузить все как zip архив';
$l["body"]='Тело';
$l["recievedBefore"]='Принято до';
$l["recievedSince"]='Принято после';
$l["answered"]='Отвечено';
$l["unanswered"]='Не отвечено';
$l["viewed"]='Просмотрено';
$l["outgoingMail"]='Исходящая почта';
$l["encryption"]='Шифрование';
$l["type"]='Тип';
$l["noEncryption"]='Нет шифрования';
$l["noAccountTitle"]='Нет учетной записи';
$l["priority"]='Приоритет';
$l["read"]='Прочитано';
$l["NA"]='Нет данных';
$l["emptyFolder"]='Очистить папку';
$l["emptyFolderConfirm"]='Вы уверены что хотите очистить\'{name}\'?';
$l["addUnknownRecipients"]='Добавить получателя';
$l["addUnknownRecipientsText"]='Только что Вы отправили письмо, один из получателей которого отсутствует в адресной книге. Нажмите на его имени если Вы хотите добавить его в Адресную книгу или закройте это окно.';
$l["attachFilesPC"]='Присоединить файлы с компьютера';
$l["attachFilesGO"]='Присоединить файлы из {product_name}';
$l["renameFolder"]='Переименовать папку';
$l["vacation"]='Автоматический ответ';
$l["vacationActive"]='Активировать автоответчик';
$l["vacationSubject"]='Тема';
$l["vacationBody"]='Тело';
$l["addToRecipients"]= 'Добавить к Получатель';
$l["addToCC"]= 'Добавить к Копия';
$l["addToBCC"]= 'Добавить к BCC';
$l["viewSource"]='Просмотреть исходное сообщение';
$l["sendNotification"]='Отправитель этого сообщения хочет получить уведомление о прочтении: %s. Хотите отправить уведомление сейчас?';
$l["searchOnSender"]='Поиск в Отправителях';
$l["blocked"]= '{blocked_images} внешние изображения заблокированы для Вашей безопасности.';
$l["unblock"]= 'Нажмите здесь чтобы показать их';
$l["loadEmailFirst"]= 'Чтобы использовать эту функцию сначала Вы должны загрузить сообщения нажав на закладку Почта';
$l["confirmEmptySubject"]='Вы не заполнили тему сообщения. Хотите отправить сообщение без темы?';
$l["usage"]='Использование дискового пространства';
$l["searchGO"]='Искать в  {product_name}';
$l["toggleWindowPosition"]= 'Сохранять положение окна с сообщением';
$l["closeUploadDialog"]='Сначала закройте диалог с загрузкой фалов или дождитесь пока файлы не загрузятся';
$l["defaultProgram"]='Почтовая программа по умолчанию';
$l["defaultProgramInstructions"] ='<p>Чтобы установить {product_name} как почтовую программу по умолчанию перейдите на <a class="normal-link" href="http://www.{product_name}.com/wiki/E-mail#Set_{product_name}_as_your_default_e-mail_client" target="_blank">read the instructions</a>.</p><p>Затем, если Вы используете Windows, загрузите и откройте <a class="normal-link" href="{url}"> файл</a></p>';
$l["htmlMarkup"]= 'Использовать HTML маркировку';
$l["confirmLostChanges"]= 'Изменения будут потеряны. Вы уверены?';
$l["alias"]="Псевдоним";
$l["aliases"]="Псевдонимы";
$l["accountId"]="Учетная запись";
$l["email"]="Email";
$l["signature"]="Подпись";
$l["manageAliases"]='Управление псевдонимами отправителей';
$l["addSendersTo"]='Добавить отправителей в...';
$l["defaultTemplate"]='Использовать как шаблон по умолчанию';
$l["moving"]='Перемещение...';
$l["orderFilters"]='Вы можете изменить порядок фильтров перетащив их.';
$l["orderAccounts"]='Вы можете изменить порядок учетных записей перетащив их.';
$l["groups"]='Группы';
$l["showUnread"]='Показать непрочитанные';
$l["searchFrom"]='Отправитель';
$l["searchTo"]='Получатель';
$l["searchCC"]='Получатель (копия)';
$l["youHaveNewMails"]= 'У Вас {new} новых сообщений';
$l["replaceEmailText"]='У этого контакта уже добавлено три email адреса. Вы можете заменить один из уже записаных адресов кликнув на него.';
$l["skipUnknownRecipientsAction"]='Не показывать это окно в следующий раз';
$l["skipUnknownRecipients"]='Не показывать диалог "Неизвестный получатель"';
$l["alwaysRequestNotification"]='Всегда запрашивать подтверждение о прочтении письма';
$l["icalendarUpdateEvent"]='Обновить событие';
$l["icalendarDeleteEvent"]='Удалить событие';
$l["icalendarAcceptInvitation"]='Принять';
$l["icalendarDeclineInvitation"]='Отклонить';
$l["icalendarTentativeInvitation"]='Предварительно';
$l["alwaysRespondToNotifications"]='Всегда отвечать на уведомление о прочтении письма';
$l["anyField"]='Все поля';
$l["icalendarEventUpdated"]='Событие обновлено.';
$l["icalendarEventCreated"]='Событие создано.';
$l["icalendarEventDeleted"]='Событие удалено.';
$l["icalendarInvitationDeclined"]='Приглашение отклонено.';
$l["icalendarDeleteEventConfirm"]='Вы уверены что хотите удалить это событие?';
$l["sending"]='Отправка...';