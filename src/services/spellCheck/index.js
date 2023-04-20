import { SpellCheckUsecase } from '@data/spellCheck/spellCheckUsecase';

import { SpellCheckService } from '@services/spellCheck/spellCheckService';

const spellCheck = SpellCheckService();
const spellCheckUsecase = SpellCheckUsecase(spellCheck.getSpellCheck);

export default {
  spellCheck: spellCheckUsecase.getSpellCheck,
};
