# nyx.sideload

Минималистичный статический портал для OTA-установки ESign, KSign и N.Sign прямо на iOS-устройства.

[English version](README.md)

[![Deploy](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml/badge.svg)](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml)

## 🚀 Возможности

- **OTA-установка** — быстрая загрузка приложений прямо из Safari.
- **Защита от отзывов** — оптимизированный DNS-профиль (`dns.mobileconfig`) для блокировки серверов отзывов Apple.
- **Breeze Guide** — пошаговое руководство по сайдлоуду в `/tutorial`.
- **Интеграция с N.Sign** — промо-попап для веб-версии N.Sign.
- **Красивый UI** — плавная glassmorphism-тема, кастомные цветовые схемы и оптимизированный фоновый дрейф звезд с GPU-ускорением.

## 📂 Структура репозитория

```text
.
├── ipas/             # Подписанные IPA-пакеты приложений
├── plists/           # XML-манифесты для OTA-установки (.plist)
├── icons/            # Иконки и графические ресурсы сайта
├── tutorial/         # Интерактивный гайд по сайдлоаду (Breeze VN)
├── 404.html          # Страница ошибки с редиректом на главную
├── index.html        # Главная страница
├── index.css         # Стили сайта
├── index.js          # Логика и скрипты
└── version.json      # Метаданные версий и размеров IPA
```

> [!NOTE]
> Сертификаты, локальные утилиты сборки и шаблоны хранятся локально у разработчика и исключены из репозитория через `.gitignore`.

