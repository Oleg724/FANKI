import React from 'react';
import Fanki from './fanki-icon';
import Flesh from './flesh-icon';
import Calendar from './calendar-icon';
import Book from './book-icon';
import BookOpen from './book-open-icon';
import CheckmarkCircle from './checkmark-circle-icon';
import MessageCircle from './message-circle-icon';
import TrendingUp from './trending-up-icon';
import Copy from './copy-icon';
import People from './people-icon';
import Settings from './settings-icon';
import Layers from './layers-icon';
// import SettingsIcon from '../../assets/role/settings.svg';
// import PersonIcon from './person-icon';
// import TimerIcon from '../../assets/role/timer.svg';
// import LogOutIcon from '../../assets/role/log-out.svg';

const personIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAg
    MCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcn
    VsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgN0MxNCA1Ljg5NyAxMy4xMDMgNSAxMiA1QzEwLjg5NyA1
    IDEwIDUuODk3IDEwIAogICAgICAgIDdDMTAgOC4xMDMgMTAuODk3IDkgMTIgOUMxMy4xMDMgOSAxNCA4LjEwMyAxNCA3Wk0xNi
    A3QzE2IDkuMjA2IDE0LjIwNiAxMSAxMiAxMUM5Ljc5NCAxMSA4IDkuMjA2IDggCiAgICAgICAgN0M4IDQuNzk0IDkuNzk0IDMg
    MTIgM0MxNC4yMDYgMyAxNiA0Ljc5NCAxNiA3Wk01IDIwQzUgMTYuMTQgOC4xNDEgMTMgMTIgMTNDMTUuODU5IDEzIDE5IDE2Lj
    E0IDE5IAogICAgICAgIDIwQzE5IDIwLjU1MiAxOC41NTMgMjEgMTggMjFDMTcuNDQ3IDIxIDE3IDIwLjU1MiAxNyAyMEMxNyAx
    Ny4yNDMgMTQuNzU3IDE1IDEyIDE1QzkuMjQzIDE1IDcgMTcuMjQzIAogICAgICAgIDcgMjBDNyAyMC41NTIgNi41NTMgMjEgNi
    AyMUM1LjQ0NyAyMSA1IDIwLjU1MiA1IDIwWiIgZmlsbD0id2hpdGUiLz4KICAgIDxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBl
    PSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNSIgeT0iMyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE4Ij4KIC
    AgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDdDMTQgNS44OTcgMTMu
    MTAzIDUgMTIgNUMxMC44OTcgNSAxMCA1Ljg5NyAxMCAKICAgICAgICAgICAgN0MxMCA4LjEwMyAxMC44OTcgOSAxMiA5QzEzLj
    EwMyA5IDE0IDguMTAzIDE0IDdaTTE2IDdDMTYgOS4yMDYgMTQuMjA2IDExIDEyIDExQzkuNzk0IDExIDggOS4yMDYgOCAKICAg
    ICAgICAgICAgN0M4IDQuNzk0IDkuNzk0IDMgMTIgM0MxNC4yMDYgMyAxNiA0Ljc5NCAxNiA3Wk01IDIwQzUgMTYuMTQgOC4xND
    EgMTMgMTIgMTNDMTUuODU5IDEzIDE5IDE2LjE0IDE5IAogICAgICAgICAgICAyMEMxOSAyMC41NTIgMTguNTUzIDIxIDE4IDIx
    QzE3LjQ0NyAyMSAxNyAyMC41NTIgMTcgMjBDMTcgMTcuMjQzIDE0Ljc1NyAxNSAxMiAxNUM5LjI0MyAxNSA3IDE3LjI0MyAKIC
    AgICAgICAgICAgNyAyMEM3IDIwLjU1MiA2LjU1MyAyMSA2IDIxQzUuNDQ3IDIxIDUgMjAuNTUyIDUgMjBaIiBmaWxsPSJ3aGl0
    ZSIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMCkiPgogICAgPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9Ij
    I0IiBmaWxsPSIjNjE2MDYxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=`;
const settingsIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0
    ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY
    2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC40MDI3NSAxMS42MjIxQzUuNTE4NzUgMTIuMDA1MSA2LjQwNzc1IDEyLjkzOTEgNi4
    3Nzk3NSAKICAgICAgICAxNC4xMjMxTDYuODE5NzUgMTQuMjQzMUM3LjI0NTc1IDE1LjQ5OTEgNy4wNzI3NSAxNi44NTExIDYuM
    zU4NzUgMTcuODY1MUM2LjIyODc1IDE4LjA0OTEgNi4yNTc3NSAxOC4yNjkxIAogICAgICAgIDYuMzk0NzUgMTguMzczMUw4LjQ2
    Njc1IDE5Ljk0NzFDOC41Mzk3NSAyMC4wMDIxIDguNjEwNzUgMjAuMDAyMSA4LjY1NDc1IDE5Ljk5NzFDOC43MDQ3NSAxOS45ODk
    xIDguNzc3NzUgCiAgICAgICAgMTkuOTYyMSA4LjgzNjc1IDE5Ljg3ODFMOS4wNjc3NSAxOS41NTAxQzkuNzU2NzUgMTguNTczMS
    AxMC44NjY3IDE3Ljk3MDEgMTIuMDM4NyAxNy45MzYxQzEzLjM1NDcgMTcuOTA5MSAKICAgICAgICAxNC41MzY3IDE4LjUxMjEgM
    TUuMjcyNyAxOS41NzUxTDE1LjM5MDcgMTkuNzQ2MUMxNS40NDk3IDE5LjgzMDEgMTUuNTIxNyAxOS44NTgxIDE1LjU3MjcgMTku
    ODY2MUMxNS42MTY3IAogICAgICAgIDE5Ljg3NTEgMTUuNjg4NyAxOS44NzIxIDE1Ljc2MDcgMTkuODE2MUwxNy44MjE3IDE4LjI
    2MTFDMTcuOTY1NyAxOC4xNTMxIDE3Ljk5NzcgMTcuOTIyMSAxNy44OTA3IAogICAgICAgIDE3Ljc2NzFMMTcuNjMwNyAxNy4zOT
    IxQzE2Ljk2MDcgMTYuNDI0MSAxNi43NjE3IDE1LjE2ODEgMTcuMDk4NyAxNC4wMzMxQzE3LjQ2NDcgMTIuNzk3MSAxOC4zOTU3I
    AogICAgICAgIDExLjgxOTEgMTkuNTkwNyAxMS40MTkxTDE5Ljc5MTcgMTEuMzUxMUMxOS45NTI3IDExLjI5ODEgMjAuMDM5NyAx
    MS4wOTgxIDE5Ljk4MjcgM
    TAuOTE0MUwxOS4xOTU3IAogICAgICAgIDguMzkzMTFDMTkuMTU4NyA4LjI3NTExIDE5LjA4MjcgOC4yMjIxMSAxOS4wNDA3IDgu
    MjAwMTFDMTguOTgwNyA4LjE2OTExIDE4LjkxNTcgOC4xNjQxMSAxOC44NTM3IAogICAgICAgIDguMTg1MTFMMTguNTEzNyA4LjI
    5ODExQzE3LjM1MDcgOC42ODUxMSAxNi4wNjc3IDguNDc1MTEgMTUuMDgyNyA3LjczNDExTDE0Ljk3NDcgNy42NTMxMUMxNC4wMzg
    3IAogICAgICAgIDYuOTQ5MTEgMTMuNDgxNyA1LjgxNDExIDEzLjQ4NTcgNC42MTgxMUwxMy40ODc3IDQuMzM4MTFDMTMuNDg3NyA
    0LjIwNTExIDEzLjQyNDcgNC4xMjIxMSAxMy4zODY3IAogICAgICAgIDQuMDg0MTFDMTMuMzUwNyA0LjA0NzExIDEzLjI4OTcgNC4
    wMDMxMSAxMy4yMDM3IDQuMDAzMTFMMTAuNjU2NyA0LjAwMDExQzEwLjUwMDcgNC4wMDAxMSAxMC4zNzM3IAogICAgICAgIDQuMTQ
    5MTEgMTAuMzcyNyA0LjMzMzExTDEwLjM3MTcgNC41NzUxMUMxMC4zNjY3IDUuNzkwMTEgOS43OTc3NSA2Ljk0NjExIDguODQ5NzU
    gNy42NjkxMUw4LjcyMDc1IAogICAgICAgIDcuNzY3MTFDNy42Nzc3NSA4LjU2MDExIDYuMzE3NzUgOC43ODQxMSA1LjA4NTc1IDg
    uMzY0MTFDNS4wMzg3NSA4LjM0ODExIDQuOTk0NzUgOC4zNTExMSA0Ljk1Mjc1IAogICAgICAgIDguMzczMTFDNC45MjA3NSA4LjM
    4OTExIDQuODYyNzUgOC40MzAxMSA0LjgzNDc1IDguNTIxMTFMNC4wMTc3NSAxMS4xMTcxQzMuOTU4NzUgMTEuMzA2MSA0LjA1NTc
    1IAogICAgICAgIDExLjUwMzEgNC4yMzg3NSAxMS41NjYxTDQuNDAyNzUgMTEuNjIyMVpNOC42MTM3NSAyMi4wMDAxQzguMTI3NzU
    gMjIuMDAwMSA3LjY1NTc1IDIxLjg0MjEgCiAgICAgICAgNy4yNTc3NSAyMS41MzkxTDUuMTg1NzUgMTkuOTY2MUM0LjE5NTc1IDE
    5LjIxNjEgMy45NzY3NSAxNy43NzMxIDQuNjk2NzUgMTYuNzUwMUM1LjA3MDc1IDE2LjIyMDEgCiAgICAgICAgNS4xNDc3NSAxNS4
    1MzkxIDQuOTI3NzUgMTQuODkzMUw0Ljg3Mjc1IDE0LjcyNTFDNC42ODk3NSAxNC4xNDMxIDQuMjcxNzUgMTMuNjkxMSAzLjc1NDc
    1IAogICAgICAgIDEzLjUxNDFIMy43NTM3NUwzLjU5MDc1IDEzLjQ1NzFDMi4zNzI3NSAxMy4wNDAxIDEuNzIyNzUgMTEuNzQ5MSA
    yLjEwOTc1IDEwLjUxNzFMMi45MjU3NSAKICAgICAgICA3LjkyMjExQzMuMTEwNzUgNy4zMzUxMSAzLjUwOTc1IDYuODYxMTEgNC4
    wNDk3NSA2LjU4ODExQzQuNTc3NzUgNi4zMjIxMSA1LjE3NDc1IDYuMjgxMTEgCiAgICAgICAgNS43MzI3NSA2LjQ3MjExQzYuMzM
    xNzUgNi42NzYxMSA2Ljk5Njc1IDYuNTY1MTEgNy41MDk3NSA2LjE3NTExTDcuNjM4NzUgNi4wNzcxMUM4LjA5NDc1IAogICAgICA
    gIDUuNzI5MTEgOC4zNjk3NSA1LjE2NDExIDguMzcxNzUgNC41NjcxMUw4LjM3Mjc1IDQuMzI2MTFDOC4zNzc3NSAzLjA0MjExIDk
    uNDAyNzUgMi4wMDAxMSAKICAgICAgICAxMC42NTU3IDIuMDAwMTFIMTAuNjU5N0wxMy4yMDY3IDIuMDAzMTFDMTMuODA4NyAyLjA
    wNDExIDE0LjM3NjcgMi4yNDIxMSAxNC44MDQ3IDIuNjczMTFDMTUuMjQ3NyAKICAgICAgICAzLjExODExIDE1LjQ4OTcgMy43MTM
    xMSAxNS40ODc3IDQuMzQ4MTFMMTUuNDg1NyA0LjYyNzExQzE1LjQ4MzcgNS4xOTMxMSAxNS43NDI3IDUuNzI4MTEgMTYuMTc5NyA
    KICAgICAgICA2LjA1NjExTDE2LjI4NjcgNi4xMzcxMUMxNi43NDU3IDYuNDgyMTEgMTcuMzQzNyA2LjU4MTExIDE3Ljg4MDcgNi4
    0MDExMUwxOC4yMTk3IDYuMjg4MTFDMTguNzk2NyAKICAgICAgICA2LjA5NjExIDE5LjQxMDcgNi4xNDMxMSAxOS45NTE3IDYuNDI
    wMTFDMjAuNTA2NyA2LjcwNDExIDIwLjkxNjcgNy4xOTMxMSAyMS4xMDQ3IDcuNzk4MTFMMjEuODkxNyAKICAgICAgICAxMC4zMTk
    xQzIyLjI3MTcgMTEuNTM3MSAyMS42MTM3IDEyLjg1MTEgMjAuNDI2NyAxMy4yNDgxTDIwLjIyNTcgMTMuMzE1MUMxOS42NDk3IDE
    zLjUwOTEgMTkuMTk2NyAKICAgICAgICAxMy45ODkxIDE5LjAxNTcgMTQuNjAxMUMxOC44NDk3IDE1LjE2MjEgMTguOTQ1NyAxNS4
    3NzkxIDE5LjI3NDcgMTYuMjUzMUwxOS41MzQ3IDE2LjYyODFDMjAuMjQ4NyAKICAgICAgICAxNy42NjAxIDIwLjAyMDcgMTkuMTA
    4MSAxOS4wMjY3IDE5Ljg1NzFMMTYuOTY1NyAyMS40MTMxQzE2LjQ3MDcgMjEuNzg3MSAxNS44NjM3IDIxLjkzODEgMTUuMjU0NyA
    KICAgICAgICAyMS44NDExQzE0LjY0MDcgMjEuNzQyMSAxNC4xMDQ3IDIxLjQwMjEgMTMuNzQ1NyAyMC44ODQxTDEzLjYyNzcgMjA
    uNzEyMUMxMy4yNzc3IDIwLjIwODEgMTIuNzE3NyAKICAgICAgICAxOS45MDIxIDEyLjEzMDcgMTkuOTM1MUMxMS41NDI3IDE5Ljk
    1MTEgMTEuMDM0NyAyMC4yMzAxIDEwLjcwMjcgMjAuNzAyMUwxMC40NzE3IDIxLjAzMDFDMTAuMTA5NyAKICAgICAgICAyMS41NDM
    xIDkuNTcyNzUgMjEuODc4MSA4Ljk2MTc1IDIxLjk3NDFDOC44NDQ3NSAyMS45OTIxIDguNzI4NzUgMjIuMDAwMSA4LjYxMzc1IDI
    yLjAwMDFaTTExLjk5OTkgCiAgICAgICAgMTAuNUMxMS4xNzI5IDEwLjUgMTAuNDk5OSAxMS4xNzMgMTAuNDk5OSAxMkMxMC40OTk
    5IDEyLjgyNyAxMS4xNzI5IDEzLjUgMTEuOTk5OSAxMy41QzEyLjgyNjkgMTMuNSAKICAgICAgICAxMy40OTk5IDEyLjgyNyAxMy4
    0OTk5IDEyQzEzLjQ5OTkgMTEuMTczIDEyLjgyNjkgMTAuNSAxMS45OTk5IDEwLjVaTTExLjk5OTkgMTUuNUMxMC4wNjk5IDE1LjU
    gCiAgICAgICAgOC40OTk5NSAxMy45MyA4LjQ5OTk1IDEyQzguNDk5OTUgMTAuMDcgMTAuMDY5OSA4LjUwMDAxIDExLjk5OTkgOC4
    1MDAwMUMxMy45Mjk5IDguNTAwMDEgMTUuNDk5OSAKICAgICAgICAxMC4wNyAxNS40OTk5IDEyQzE1LjQ5OTkgMTMuOTMgMTMuOTI
    5OSAxNS41IDExLjk5OTkgMTUuNVoiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI
    xIiB5PSIyIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWx
    lPSJldmVub2RkIiBkPSJNNC40MDI3NSAxMS42MjIxQzUuNTE4NzUgMTIuMDA1MSA2LjQwNzc1IDEyLjkzOTEgCiAgICAgICAgICA
    gIDYuNzc5NzUgMTQuMTIzMUw2LjgxOTc1IDE0LjI0MzFDNy4yNDU3NSAxNS40OTkxIDcuMDcyNzUgMTYuODUxMSA2LjM1ODc1IDE
    3Ljg2NTFDNi4yMjg3NSAxOC4wNDkxIAogICAgICAgICAgICA2LjI1Nzc1IDE4LjI2OTEgNi4zOTQ3NSAxOC4zNzMxTDguNDY2NzU
    gMTkuOTQ3MUM4LjUzOTc1IDIwLjAwMjEgOC42MTA3NSAyMC4wMDIxIDguNjU0NzUgCiAgICAgICAgICAgIDE5Ljk5NzFDOC43MDQ
    3NSAxOS45ODkxIDguNzc3NzUgMTkuOTYyMSA4LjgzNjc1IDE5Ljg3ODFMOS4wNjc3NSAxOS41NTAxQzkuNzU2NzUgMTguNTczMSA
    KICAgICAgICAgICAgMTAuODY2NyAxNy45NzAxIDEyLjAzODcgMTcuOTM2MUMxMy4zNTQ3IDE3LjkwOTEgMTQuNTM2NyAxOC41MTI
    xIDE1LjI3MjcgMTkuNTc1MUwxNS4zOTA3IAogICAgICAgICAgICAxOS43NDYxQzE1LjQ0OTcgMTkuODMwMSAxNS41MjE3IDE5Ljg
    1ODEgMTUuNTcyNyAxOS44NjYxQzE1LjYxNjcgMTkuODc1MSAxNS42ODg3IDE5Ljg3MjEgCiAgICAgICAgICAgIDE1Ljc2MDcgMTk
    uODE2MUwxNy44MjE3IDE4LjI2MTFDMTcuOTY1NyAxOC4xNTMxIDE3Ljk5NzcgMTcuOTIyMSAxNy44OTA3IDE3Ljc2NzFMMTcuNjM
    wNyAKICAgICAgICAgICAgMTcuMzkyMUMxNi45NjA3IDE2LjQyNDEgMTYuNzYxNyAxNS4xNjgxIDE3LjA5ODcgMTQuMDMzMUMxNy4
    0NjQ3IDEyLjc5NzEgMTguMzk1NyAxMS44MTkxIAogICAgICAgICAgICAxOS41OTA3IDExLjQxOTFMMTkuNzkxNyAxMS4zNTExQzE
    5Ljk1MjcgMTEuMjk4MSAyMC4wMzk3IDExLjA5ODEgMTkuOTgyNyAxMC45MTQxTDE5LjE5NTcgCiAgICAgICAgICAgIDguMzkzMTF
    DMTkuMTU4NyA4LjI3NTExIDE5LjA4MjcgOC4yMjIxMSAxOS4wNDA3IDguMjAwMTFDMTguOTgwNyA4LjE2OTExIDE4LjkxNTcgOC4
    xNjQxMSAKICAgICAgICAgICAgMTguODUzNyA4LjE4NTExTDE4LjUxMzcgOC4yOTgxMUMxNy4zNTA3IDguNjg1MTEgMTYuMDY3NyA
    4LjQ3NTExIDE1LjA4MjcgNy43MzQxMUwxNC45NzQ3IAogICAgICAgICAgICA3LjY1MzExQzE0LjAzODcgNi45NDkxMSAxMy40ODE
    3IDUuODE0MTEgMTMuNDg1NyA0LjYxODExTDEzLjQ4NzcgNC4zMzgxMUMxMy40ODc3IDQuMjA1MTEgCiAgICAgICAgICAgIDEzLjQ
    yNDcgNC4xMjIxMSAxMy4zODY3IDQuMDg0MTFDMTMuMzUwNyA0LjA0NzExIDEzLjI4OTcgNC4wMDMxMSAxMy4yMDM3IDQuMDAzMTF
    MMTAuNjU2NyAKICAgICAgICAgICAgNC4wMDAxMUMxMC41MDA3IDQuMDAwMTEgMTAuMzczNyA0LjE0OTExIDEwLjM3MjcgNC4zMzM
    xMUwxMC4zNzE3IDQuNTc1MTFDMTAuMzY2NyA1Ljc5MDExIAogICAgICAgICAgICA5Ljc5Nzc1IDYuOTQ2MTEgOC44NDk3NSA3LjY
    2OTExTDguNzIwNzUgNy43NjcxMUM3LjY3Nzc1IDguNTYwMTEgNi4zMTc3NSA4Ljc4NDExIDUuMDg1NzUgCiAgICAgICAgICAgIDg
    uMzY0MTFDNS4wMzg3NSA4LjM0ODExIDQuOTk0NzUgOC4zNTExMSA0Ljk1Mjc1IDguMzczMTFDNC45MjA3NSA4LjM4OTExIDQuODY
    yNzUgOC40MzAxMSAKICAgICAgICAgICAgNC44MzQ3NSA4LjUyMTExTDQuMDE3NzUgMTEuMTE3MUMzLjk1ODc1IDExLjMwNjEgNC4
    wNTU3NSAxMS41MDMxIDQuMjM4NzUgMTEuNTY2MUw0LjQwMjc1IAogICAgICAgICAgICAxMS42MjIxWk04LjYxMzc1IDIyLjAwMDF
    DOC4xMjc3NSAyMi4wMDAxIDcuNjU1NzUgMjEuODQyMSA3LjI1Nzc1IDIxLjUzOTFMNS4xODU3NSAKICAgICAgICAgICAgMTkuOTY
    2MUM0LjE5NTc1IDE5LjIxNjEgMy45NzY3NSAxNy43NzMxIDQuNjk2NzUgMTYuNzUwMUM1LjA3MDc1IDE2LjIyMDEgNS4xNDc3NSA
    xNS41MzkxIAogICAgICAgICAgICA0LjkyNzc1IDE0Ljg5MzFMNC44NzI3NSAxNC43MjUxQzQuNjg5NzUgMTQuMTQzMSA0LjI3MTc
    1IDEzLjY5MTEgMy43NTQ3NSAxMy41MTQxSDMuNzUzNzVMMy41OTA3NSAKICAgICAgICAgICAgMTMuNDU3MUMyLjM3Mjc1IDEzLjA
    0MDEgMS43MjI3NSAxMS43NDkxIDIuMTA5NzUgMTAuNTE3MUwyLjkyNTc1IDcuOTIyMTFDMy4xMTA3NSA3LjMzNTExIDMuNTA5NzUg
    CiAgICAgICAgICAgIDYuODYxMTEgNC4wNDk3NSA2LjU4ODExQzQuNTc3NzUgNi4zMjIxMSA1LjE3NDc1IDYuMjgxMTEgNS43MzI3N
    SA2LjQ3MjExQzYuMzMxNzUgNi42NzYxMSA2Ljk5Njc1IAogICAgICAgICAgICA2LjU2NTExIDcuNTA5NzUgNi4xNzUxMUw3LjYzOD
    c1IDYuMDc3MTFDOC4wOTQ3NSA1LjcyOTExIDguMzY5NzUgNS4xNjQxMSA4LjM3MTc1IDQuNTY3MTFMOC4zNzI3NSAKICAgICAgICA
    gICAgNC4zMjYxMUM4LjM3Nzc1IDMuMDQyMTEgOS40MDI3NSAyLjAwMDExIDEwLjY1NTcgMi4wMDAxMUgxMC42NTk3TDEzLjIwNjcg
    Mi4wMDMxMUMxMy44MDg3IDIuMDA0MTEgCiAgICAgICAgICAgIDE0LjM3NjcgMi4yNDIxMSAxNC44MDQ3IDIuNjczMTFDMTUuMjQ3N
    yAzLjExODExIDE1LjQ4OTcgMy43MTMxMSAxNS40ODc3IDQuMzQ4MTFMMTUuNDg1NyAKICAgICAgICAgICAgNC42MjcxMUMxNS40OD
    M3IDUuMTkzMTEgMTUuNzQyNyA1LjcyODExIDE2LjE3OTcgNi4wNTYxMUwxNi4yODY3IDYuMTM3MTFDMTYuNzQ1NyA2LjQ4MjExIAo
    gICAgICAgICAgICAxNy4zNDM3IDYuNTgxMTEgMTcuODgwNyA2LjQwMTExTDE4LjIxOTcgNi4yODgxMUMxOC43OTY3IDYuMDk2MTEg
    MTkuNDEwNyA2LjE0MzExIDE5Ljk1MTcgCiAgICAgICAgICAgIDYuNDIwMTFDMjAuNTA2NyA2LjcwNDExIDIwLjkxNjcgNy4xOTMxM
    SAyMS4xMDQ3IDcuNzk4MTFMMjEuODkxNyAxMC4zMTkxQzIyLjI3MTcgMTEuNTM3MSAKICAgICAgICAgICAgMjEuNjEzNyAxMi44NT
    ExIDIwLjQyNjcgMTMuMjQ4MUwyMC4yMjU3IDEzLjMxNTFDMTkuNjQ5NyAxMy41MDkxIDE5LjE5NjcgMTMuOTg5MSAxOS4wMTU3IAo
    gICAgICAgICAgICAxNC42MDExQzE4Ljg0OTcgMTUuMTYyMSAxOC45NDU3IDE1Ljc3OTEgMTkuMjc0NyAxNi4yNTMxTDE5LjUzNDcg
    MTYuNjI4MUMyMC4yNDg3IDE3LjY2MDEgCiAgICAgICAgICAgIDIwLjAyMDcgMTkuMTA4MSAxOS4wMjY3IDE5Ljg1NzFMMTYuOTY1N
    yAyMS40MTMxQzE2LjQ3MDcgMjEuNzg3MSAxNS44NjM3IDIxLjkzODEgMTUuMjU0NyAKICAgICAgICAgICAgMjEuODQxMUMxNC42ND
    A3IDIxLjc0MjEgMTQuMTA0NyAyMS40MDIxIDEzLjc0NTcgMjAuODg0MUwxMy42Mjc3IDIwLjcxMjFDMTMuMjc3NyAyMC4yMDgxIAo
    gICAgICAgICAgICAxMi43MTc3IDE5LjkwMjEgMTIuMTMwNyAxOS45MzUxQzExLjU0MjcgMTkuOTUxMSAxMS4wMzQ3IDIwLjIzMDEg
    MTAuNzAyNyAyMC43MDIxTDEwLjQ3MTcgCiAgICAgICAgICAgIDIxLjAzMDFDMTAuMTA5NyAyMS41NDMxIDkuNTcyNzUgMjEuODc4M
    SA4Ljk2MTc1IDIxLjk3NDFDOC44NDQ3NSAyMS45OTIxIDguNzI4NzUgMjIuMDAwMSAKICAgICAgICAgICAgOC42MTM3NSAyMi4wMD
    AxWk0xMS45OTk5IDEwLjVDMTEuMTcyOSAxMC41IDEwLjQ5OTkgMTEuMTczIDEwLjQ5OTkgMTJDMTAuNDk5OSAxMi44MjcgCiAgICA
    gICAgICAgIDExLjE3MjkgMTMuNSAxMS45OTk5IDEzLjVDMTIuODI2OSAxMy41IDEzLjQ5OTkgMTIuODI3IDEzLjQ5OTkgMTJDMTMu
    NDk5OSAxMS4xNzMgMTIuODI2OSAKICAgICAgICAgICAgMTAuNSAxMS45OTk5IDEwLjVaTTExLjk5OTkgMTUuNUMxMC4wNjk5IDE1L
    jUgOC40OTk5NSAxMy45MyA4LjQ5OTk1IDEyQzguNDk5OTUgMTAuMDcgMTAuMDY5OSAKICAgICAgICAgICAgOC41MDAwMSAxMS45OT
    k5IDguNTAwMDFDMTMuOTI5OSA4LjUwMDAxIDE1LjQ5OTkgMTAuMDcgMTUuNDk5OSAxMkMxNS40OTk5IDEzLjkzIDEzLjkyOTkgMTU
    uNSAKICAgICAgICAgICAgMTEuOTk5OSAxNS41WiIgZmlsbD0id2hpdGUiLz4KICAgIDwvbWFzaz4KICAgIDxnIG1hc2s9InVybCgj
    bWFzazApIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzYxNjA2MSIvPgogICAgPC9nPgo8L3N2Zz4K`;
const timerIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZml
    sbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZ
    CIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTJIMTNWMTBDMTMgOS40NDcgMTIuNTUyIDkgMTIgOUMxMS40NDggOSAxMSA
    5LjQ0NyAKICAgICAgICAxMSAxMFYxM0MxMSAxMy41NTMgMTEuNDQ4IDE0IDEyIDE0SDE1QzE1LjU1MiAxNCAxNiAxMy41NTMgM
    TYgMTNDMTYgMTIuNDQ3IDE1LjU1MiAxMiAxNSAxMlpNMTIgMTkuNzVDOC4yNzggCiAgICAgICAgMTkuNzUgNS4yNSAxNi43MjI
    gNS4yNSAxM0M1LjI1IDkuMjc4IDguMjc4IDYuMjUgMTIgNi4yNUMxNS43MjIgNi4yNSAxOC43NSA5LjI3OCAxOC43NSAxM0MxO
    C43NSAxNi43MjIgCiAgICAgICAgMTUuNzIyIDE5Ljc1IDEyIDE5Ljc1Wk0xMi45ODggNC4wNThDMTIuOTkgNC4wMzcgMTMgNC4
    wMjEgMTMgNFYzSDE0QzE0LjU1MiAzIDE1IDIuNTUzIDE1IDJDMTUgMS40NDcgCiAgICAgICAgMTQuNTUyIDEgMTQgMUgxMEM5L
    jQ0OCAxIDkgMS40NDcgOSAyQzkgMi41NTMgOS40NDggMyAxMCAzSDExVjRDMTEgNC4wMjEgMTEuMDEgNC4wMzcgMTEuMDEyIDQ
    uMDU4QzYuNTEzIAogICAgICAgIDQuNTUyIDMgOC4zNzIgMyAxM0MzIDE3Ljk2MyA3LjAzOCAyMiAxMiAyMkMxNi45NjIgMjIgM
    jEgMTcuOTYzIDIxIDEzQzIxIDguMzcyIDE3LjQ4NyA0LjU1MiAxMi45ODggNC4wNThaIiAKICAgICAgICBmaWxsPSJ3aGl0ZSI
    vPgogICAgPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIzI
    iB5PSIxIiB3aWR0aD0iMTgiIGhlaWdodD0iMjEiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWx
    lPSJldmVub2RkIiBkPSJNMTUgMTJIMTNWMTBDMTMgOS40NDcgMTIuNTUyIDkgMTIgOUMxMS40NDggOSAxMSA5LjQ0NyAKICAgI
    CAgICAxMSAxMFYxM0MxMSAxMy41NTMgMTEuNDQ4IDE0IDEyIDE0SDE1QzE1LjU1MiAxNCAxNiAxMy41NTMgMTYgMTNDMTYgMTI
    uNDQ3IDE1LjU1MiAxMiAxNSAxMlpNMTIgMTkuNzVDOC4yNzggCiAgICAgICAgMTkuNzUgNS4yNSAxNi43MjIgNS4yNSAxM0M1L
    jI1IDkuMjc4IDguMjc4IDYuMjUgMTIgNi4yNUMxNS43MjIgNi4yNSAxOC43NSA5LjI3OCAxOC43NSAxM0MxOC43NSAxNi43MjI
    gCiAgICAgICAgMTUuNzIyIDE5Ljc1IDEyIDE5Ljc1Wk0xMi45ODggNC4wNThDMTIuOTkgNC4wMzcgMTMgNC4wMjEgMTMgNFYzS
    DE0QzE0LjU1MiAzIDE1IDIuNTUzIDE1IDJDMTUgMS40NDcgCiAgICAgICAgMTQuNTUyIDEgMTQgMUgxMEM5LjQ0OCAxIDkgMS4
    0NDcgOSAyQzkgMi41NTMgOS40NDggMyAxMCAzSDExVjRDMTEgNC4wMjEgMTEuMDEgNC4wMzcgMTEuMDEyIDQuMDU4QzYuNTEzI
    AogICAgICAgIDQuNTUyIDMgOC4zNzIgMyAxM0MzIDE3Ljk2MyA3LjAzOCAyMiAxMiAyMkMxNi45NjIgMjIgMjEgMTcuOTYzIDI
    xIDEzQzIxIDguMzcyIDE3LjQ4NyA0LjU1MiAxMi45ODggNC4wNThaIiAKICAgICAgICBmaWxsPSJ3aGl0ZSIvPgogICAgPC9tY
    XNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzYxNjA2MSIvPgo
    8L2c+Cjwvc3ZnPgo=`;
const logoutIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNC
    IgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb24vT3V0bGluZS9sb2ctb3V0
    Ij4KPHBhdGggaWQ9Ik1hc2siIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCA1QzggNS41NSA3Lj
    U1IDYgNyA2SDZWMThIN0M3LjU1IDE4IDggMTguNDUgOCAKICAgIDE5QzggMTkuNTUgNy41NSAyMCA3IDIwSDVDNC40NSAyMCA0IDE5
    LjU1IDQgMTlWNUM0IDQuNDUgNC40NSA0IDUgNEg3QzcuNTUgNCA4IDQuNDUgOCA1Wk0xOC4wMDM5IAogICAgNy40MjQ4TDIwLjgxNz
    kgMTEuNDI0OEMyMS4wNjc5IDExLjc3ODggMjEuMDU5OSAxMi4yNTM4IDIwLjc5OTkgMTIuNTk5OEwxNy43OTk5IDE2LjU5OThDMTcu
    NjAzOSAKICAgIDE2Ljg2MTggMTcuMzAyOSAxNi45OTk4IDE2Ljk5ODkgMTYuOTk5OEMxNi43OTA5IDE2Ljk5OTggMTYuNTc5OSAxNi
    45MzQ4IDE2LjM5OTkgMTYuNzk5OEMxNS45NTc5IAogICAgMTYuNDY4OCAxNS44Njg5IDE1Ljg0MTggMTYuMTk5OSAxNS40MDA4TDE4
    LjAwMDkgMTIuOTk5OEgxNy45OTk5SDkuOTk5OUM5LjQ0NzkgMTIuOTk5OCA4Ljk5OTkgCiAgICAxMi41NTI4IDguOTk5OSAxMS45OT
    k4QzguOTk5OSAxMS40NDY4IDkuNDQ3OSAxMC45OTk4IDkuOTk5OSAxMC45OTk4SDE3Ljk5OTlDMTguMDE2NCAxMC45OTk4IAogICAg
    MTguMDMxNyAxMS4wMDQ0IDE4LjA0NzIgMTEuMDA4OUMxOC4wNTk4IDExLjAxMjcgMTguMDcyNCAxMS4wMTY1IDE4LjA4NTkgMTEuMD
    E3OEwxNi4zNjc5IDguNTc0OEMxNi4wNDk5IAogICAgOC4xMjM4IDE2LjE1ODkgNy40OTk4IDE2LjYxMDkgNy4xODE4QzE3LjA2MTkg
    Ni44NjI4IDE3LjY4NTkgNi45NzI4IDE4LjAwMzkgNy40MjQ4WiIgZmlsbD0iI2ZmNGMwMCIvPgo8bWFzayBpZD0ibWFzazAiIG1hc2
    stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjQiIHk9IjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiI+CjxwYXRoIGlkPSJNYXNrXzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCA1QzggNS41NSA3L
    jU1IDYgNyA2SDZWMThIN0M3LjU1IDE4IDggCiAgICAxOC40NSA4IDE5QzggMTkuNTUgNy41NSAyMCA3IDIwSDVDNC40NSAyMCA0IDE
    5LjU1IDQgMTlWNUM0IDQuNDUgNC40NSA0IDUgNEg3QzcuNTUgNCA4IDQuNDUgOCA1Wk0xOC4wMDM5IAogICAgNy40MjQ4TDIwLjgxN
    zkgMTEuNDI0OEMyMS4wNjc5IDExLjc3ODggMjEuMDU5OSAxMi4yNTM4IDIwLjc5OTkgMTIuNTk5OEwxNy43OTk5IDE2LjU5OThDMTc
    uNjAzOSAxNi44NjE4IAogICAgMTcuMzAyOSAxNi45OTk4IDE2Ljk5ODkgMTYuOTk5OEMxNi43OTA5IDE2Ljk5OTggMTYuNTc5OSAxN
    i45MzQ4IDE2LjM5OTkgMTYuNzk5OEMxNS45NTc5IDE2LjQ2ODggMTUuODY4OSAKICAgIDE1Ljg0MTggMTYuMTk5OSAxNS40MDA4TDE
    4LjAwMDkgMTIuOTk5OEgxNy45OTk5SDkuOTk5OUM5LjQ0NzkgMTIuOTk5OCA4Ljk5OTkgMTIuNTUyOCA4Ljk5OTkgMTEuOTk5OEM4L
    jk5OTkgCiAgICAxMS40NDY4IDkuNDQ3OSAxMC45OTk4IDkuOTk5OSAxMC45OTk4SDE3Ljk5OTlDMTguMDE2NCAxMC45OTk4IDE4LjA
    zMTcgMTEuMDA0NCAxOC4wNDcyIDExLjAwODlDMTguMDU5OCAKICAgIDExLjAxMjcgMTguMDcyNCAxMS4wMTY1IDE4LjA4NTkgMTEuM
    DE3OEwxNi4zNjc5IDguNTc0OEMxNi4wNDk5IDguMTIzOCAxNi4xNTg5IDcuNDk5OCAxNi42MTA5IAogICAgNy4xODE4QzE3LjA2MTk
    gNi44NjI4IDE3LjY4NTkgNi45NzI4IDE4LjAwMzkgNy40MjQ4WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI
    21hc2swKSI+CjxnIGlkPSImIzI0MDsmIzE1OTsmIzE0MjsmIzE2ODsgQ29sb3IiPgo8cmVjdCBpZD0iQmFzZSIgd2lkdGg9IjI0IiBo
    ZWlnaHQ9IjI0IiBmaWxsPSIjZmY0YzAwIi8+CjwvZz4KPC9nPgo8L2c+Cjwvc3ZnPgo=`;

export default class Constants {
    
    _main = {
        label: 'Компания',
        list: [
            {
                id: 1,
                title: 'Главная',
                icon: <Fanki/>,
                path: '/',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 2,
                title: 'Запросы',
                icon: <Flesh/>,
                path: '/queries',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 3,
                title: 'Календарь',
                icon: <Calendar/>,
                path: '/calendar',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 4,
                title: 'База знаний',
                icon: <Book/>,
                path: '/knowledge-base',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 5,
                title: 'Новости',
                icon: <BookOpen/>,
                path: '/news',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 6,
                title: 'Задачи',
                icon: <CheckmarkCircle/>,
                path: '/tasks',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 7,
                title: 'Чаты',
                icon: <MessageCircle/>,
                path: '/chats',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            }      
        ]
    };

    _administrator = {
        label: 'Администратор',
        list: [
            {
                id: 1,
                title: 'Статистика компании',
                icon: <TrendingUp/>,
                path: '/stats',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 2,
                title: 'Структура компании',
                icon: <Copy/>,
                path: '/structure',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 3,
                title: 'Сотрудники',
                icon: <People/>,
                path: '/staff',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 4,
                title: 'База знаний',
                icon: <Book/>,
                path: '/knowledge-base',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 5,
                title: 'Новости',
                icon: <BookOpen/>,
                path: '/news',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 6,
                title: 'Настройки',
                icon: <Settings/>,
                path: '/settings',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 7,
                title: 'Служба поддержки',
                icon: <Layers/>,
                path: '/support',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            }   
        ]
    };

    _roleMenu = [
        {   
            id: 1,
            title: 'Личный профиль',
            icon: personIcon,
            isLink: true,
            path: '/profile',
            alt: 'human'
        },
        {
            id: 2,
            title: 'Настройки',
            icon: settingsIcon,
            isLink: true,
            path: '',
            alt: 'settings'
        },
        {
            id: 3,
            title: 'Отображение времени рабочей среды',
            icon: timerIcon,
            isLink: false,
            path: '/time-settings',
            alt: 'watch'
        },
        {
            id: 4,
            title: 'Выйти из аккаунта',
            icon: logoutIcon,
            isLink: true,
            path: '/',
            alt: 'exit'
        }
    ]

    getMainList = () => {
        return this._main.list;
    };

    getMainLabel = () => {
        return this._main.label;
    };

    getAdministratorList = () => {
        return this._administrator.list;
    };

    getAdministratorLabel = () => {
        return this._administrator.label;
    };

    getRoleList = () => {
        return this._roleMenu;
    };
}