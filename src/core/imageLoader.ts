// 이미지 불러오기, 픽셀 데이터 추출
import sharp from 'sharp';

type ImageData = {
    width: number;
    height: number;
    pixels: Uint8ClampedArray; // R, G, B, A 나열됨
};

export const loadImage = async (
    filePath: string,
    width: number,
    height: number,
): Promise<ImageData> => {
    // raw() 는 RGBA 순서의 배열로 만들어줌
    // ensureAlpha() 는 이미지에 알파 채널(투명도)을 보장
    // toBuffer() 은 결과를 버퍼로 리턴
    const buffer = await sharp(filePath)
        .greyscale()
        .resize(width, height, { fit: 'fill' })
        .raw()
        .ensureAlpha()
        .toBuffer();

    // const { width, height } = await image.metadata();

    return {
        width: width || 0,
        height: height || 0,
        pixels: new Uint8ClampedArray(buffer), // Unit8ClampedArray 는 0~255 범위에서 자동으로 클램핑되는 배열
    };
};
