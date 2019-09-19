module.exports = (sequelize, DataTypes) => {
    /* user 테이블에 칼럼의 스펙 작성 */
    return sequelize.define('mypage', {
        db_id: {
            /* 크기가 20인 문자열 */
            type: DataTypes.STRING(20),
            /* NULL 값 입력 안됨 */
            allowNull: true
        },
        db_image: {
            /* 크기가 200인 문자열 */
            type: DataTypes.STRING(200),
            /* NULL 값 입력 안됨 */
            allowNull: true
        }
    });
};