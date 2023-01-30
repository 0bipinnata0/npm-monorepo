const getEleByAccessibleId = (accessibleId: string) => {
  return $(`~${accessibleId}`);
};
export default getEleByAccessibleId;
