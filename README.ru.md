# nyx.sideload

Минималистичный статический портал для OTA-установки ESign, KSign и N.Sign прямо на iOS-устройства.

[English version](README.md)

[![Deploy](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml/badge.svg)](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml)

## 🚀 Возможности

- **OTA-установка** — быстрая загрузка приложений прямо из Safari.
- **Защита от отзывов** — оптимизированный DNS-профиль (`dns.mobileconfig`) для блокировки серверов отзывов Apple.
- **Arona Guide** — пошаговое руководство по сайдлоуду в `/tutorial`.
- **Интеграция с N.Sign** — промо-попап для веб-версии N.Sign.
- **Красивый UI** — плавная glassmorphism-тема, кастомные цветовые схемы и оптимизированный фоновый дрейф звезд с GPU-ускорением.

## 📂 Структура репозитория

```text
.
├── ipas/             # Подписанные IPA-пакеты приложений
├── plists/           # XML-манифесты для OTA-установки (.plist)
├── icons/            # Иконки и графические ресурсы сайта
├── tutorial/         # Руководство по установке (Arona Guide)
├── 404.html          # Перенаправление ошибок на главную
├── index.html        # Структура главной страницы
├── index.css         # Таблица стилей
├── index.js          # Логика и переводы сайта
└── version.json      # JSON-каталог с версиями и размерами файлов
```

> [!NOTE]
> Папки сертификатов, локальные скрипты сборки и шаблоны (`certificates/`, `sign_apps.py`, `build_manifest.py`, `config.env`) скрыты в `.gitignore` и хранятся локально на ПК разработчика в целях безопасности.
