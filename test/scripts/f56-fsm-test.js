const fsm = require('../../tools/f56-fsm')
fsm.handle('DLE')
fsm.handle('ENQ')
fsm.handle('DLE')
fsm.handle('STX')
fsm.handle('Data', 0x00)
fsm.handle('Data', 0x02)
fsm.handle('Data', 0x01)
fsm.handle('Data', 0xa1)
fsm.handle('DLE')
fsm.handle('ETX')
fsm.handle('Data', 0x32)
fsm.handle('Data', 0xf8)