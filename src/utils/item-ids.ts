const equivalenceMap = new Map([
  ['ak-47', 'AK-47'],
  ['ap-pistol', 'AP Pistol'],
  ['assault-shotgun', 'Assault Shotgun'],
  ['carbine-rifle', 'Carbine Rifle'],
  ['combat-pdw', 'Combat PDW'],
  ['combat-pistol', 'Combat Pistol'],
  ['double-action-revolver', 'Double Action Revolver'],
  ['gusenberg', 'Gusenberg'],
  ['heavy-pistol', 'Heavy Pistol'],
  ['heavy-revolver', 'Heavy Revolver'],
  ['heavy-sniper', 'Heavy Sniper'],
  ['micro-smg', 'Micro SMG'],
  ['pistol-50', 'Pistol .50'],
  ['pistol-mk2', 'Pistol Mk II'],
  ['pump-shotgun', 'Pump Shotgun'],
  ['sawed-off-shotgun', 'Sawed-Off Shotgun'],
  ['smg-mk1', 'SMG Mk I'],
  ['smg-mk2', 'SMG Mk II'],
  ['special-carbine', 'Special Carbine'],
  ['vintage-pistol', 'Vintage Pistol'],
]);

export const getItemNameFromId = (id: string): string => {
  return equivalenceMap.get(id) ?? '';
};