# nyx.sideload

> Статический портал для раздачи и установки iOS-приложений ESign, KSign и N.Sign.

[![Deploy](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml/badge.svg)](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml)

nyx.sideload предоставляет OTA-манифесты, прямое скачивание IPA, DNS-профиль и веб-версию N.Sign для локальной подписи приложений.

## Возможности

- современный адаптивный интерфейс в [`index.html`](index.html);
- отдельные сборки ESign, KSign и N.Sign в [`ipas/`](ipas/);
- OTA-манифесты в [`plists/`](plists/);
- DNS-профиль `dns.mobileconfig`;
- интерактивный учебник в [`tutorial/`](tutorial/);
- автоматическая генерация метаданных и plist через [`build_manifest.py`](build_manifest.py);
- страница ошибки [`404.html`](404.html).

## Структура проекта

```text
.
├── .github/workflows/      # GitHub Actions
├── certificates/           # архивы сертификатов
├── ipas/esign/             # IPA ESign
├── ipas/ksign/             # IPA KSign
├── ipas/nsign/             # IPA N.Sign
├── plists/                 # OTA-манифесты
├── tutorial/               # учебник N.Sign
├── 404.html                # страница «не найдено»
├── build_manifest.py       # генератор манифестов
├── config.env              # публичная конфигурация сайта
├── index.html              # главная страница
├── template.plist          # шаблон манифеста
└── version.json            # каталог приложений для фронтенда
```

## Обновление IPA

Положи IPA в соответствующую папку и запусти:

```bash
python build_manifest.py
```

Скрипт найдёт `Info.plist` внутри каждого IPA, определит приложение, bundle ID и версию, затем обновит `plists/`, `manifest.plist` и `version.json`. Дата приложения берётся из последнего Git-коммита файла; если Git недоступен, используется дата файла.

## Конфигурация

В [`config.env`](config.env) задаются адрес сайта и идентификаторы приложений. Bundle ID N.Sign: `nyx.sideload.nsign`.

## Важно

Репозиторий предназначен для публичной раздачи, но сертификаты и IPA всё равно должны распространяться только с разрешения правообладателей. Не добавляй приватные ключи, пароли и provisioning profiles.

## Лицензия

См. [`LICENSE`](LICENSE).
