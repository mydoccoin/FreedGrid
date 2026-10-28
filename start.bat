@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Запускаю F1 Community...
echo.
echo После запуска открой в браузере адрес из строки "Local".
echo Чтобы открыть с телефона в той же Wi-Fi - используй адрес "Network".
echo Остановить сервер: Ctrl+C
echo.
call npm.cmd run dev
pause
