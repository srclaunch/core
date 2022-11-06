import { BasicIcons } from '@srclaunch/icons';
import { Image as ImageType } from '@srclaunch/types';
// import { ValidationProblem } from '@srclaunch/validation';
import {
  // useRef,
  // forwardRef,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';

import {
  AlignHorizontal,
  // Alignment,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  // BorderColor,
  Orientation,
  Position,
  Shadow,
  Size,
  TextSize,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';
import { Icon, IconProps } from '../../../media/icon';
import { Image } from '../../../media/image';
import { CloseButton } from '../../../modals/close-button';
import { Label } from '../../../typography/label';
import { ErrorLabel } from '../../../typography/labels/errors/error-label';
// import { InputLabel } from '../../../typography/labels/forms/input-label';
import { Button, ButtonProps, ButtonType } from '../../buttons/button';
import { InputProps } from '../shared/input';

export type ImageInputProps = ContainerProps &
  InputProps<readonly (File | ImageType)[]> & {
    readonly button?: ButtonProps;
    readonly icon?: IconProps;
    readonly maxImages?: number;
  };

const validateFileType = (file: File) => {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ];

  if (!validTypes.includes(file.type)) {
    return false;
  }

  return true;
};

export const ImageInput = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    borderColor = BorderColor.Light,
    borderRadius = Amount.Least,
    button = {},
    defaultValue = [],
    onValueChange,
    padding = Amount.Default,
    icon = {},
    // label,
    maxImages = 1,
    name = 'images',

    ...props
  }: ImageInputProps): ReactElement => {
    const [images, setImages] = useState<(File | ImageType)[]>(
      defaultValue as (File | ImageType)[],
    );
    const [errorMessage, setErrorMessage] = useState<
      string | null | undefined
    >();
    const [previewImages, setPreviewImages] = useState<
      (ImageType | (File & { path?: string; url?: string }))[]
    >([]);
    // const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const validateNotAdded = (file: File) => {
      const added =
        previewImages &&
        previewImages.some(f => {
          return f.path === file.name;
        });

      if (added) {
        setErrorMessage('File already added');

        return {
          code: 'image-already-added',
          message: `Image already added`,
        };
      }

      setErrorMessage(null);

      return null;
    };

    const onDrop = useCallback(
      (files: (File & { invalid?: boolean; url?: string })[]) => {
        for (const file of files) {
          if (validateFileType(file)) {
            if (maxImages > 1) {
              setImages(previousArray => [
                ...previousArray.slice(-maxImages + 1),
                file,
              ]);
            } else {
              setImages([file]);
            }
          } else {
            file.invalid = true;
            setErrorMessage('File type not permitted');
          }
        }
      },
      [],
    );

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      maxFiles: maxImages,
      multiple: true,
      noClick: true,
      onDragEnter: () => {},
      onDragLeave: () => {},
      onDragOver: () => {},
      onDrop,
      validator: validateNotAdded,
    });

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
      if (!images || images.length === 0) {
        setPreviewImages([]);

        return;
      }

      const objectUrls = images.map(image => {
        if ('size' in image && image.size > 0) {
          return { url: URL.createObjectURL(image), ...image };
        }

        return image;
      });

      setPreviewImages(objectUrls);

      // free memory when ever this component is unmounted
      return () => {
        for (const image of objectUrls) {
          if ('url' in image && image.url) {
            URL.revokeObjectURL(image.url);
          }
        }
      };
    }, [images]);

    useEffect(() => {
      if (onValueChange) onValueChange({ value: images });
    }, [previewImages]);

    const dragLabel = `Drag ${maxImages > 1 ? 'images' : 'an image'} here...`;
    const buttonLabel = `Browse files`;

    return (
      <>
        {/* {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
            {maxImages > 1 && ` (${previewImages.length} of ${maxImages})`}
          </InputLabel>
        )} */}

        <Container
          alignHorizontal={AlignHorizontal.Center}
          alignVertical={AlignVertical.Center}
          backgroundColor={
            isDragActive ? BackgroundColor.Darker : BackgroundColor.Lightest
          }
          borderColor={borderColor}
          borderRadius={Amount.Least}
          padding={padding}
          shadow={Shadow.Low}
          {...props}
          {...getRootProps()}
        >
          <Container
            alignHorizontal={AlignHorizontal.Center}
            alignVertical={AlignVertical.Center}
            padding={Amount.Default}
            paddingTop={Amount.Least}
          >
            <input name={name} {...getInputProps()} />

            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}

            {previewImages && previewImages.length > 0 ? (
              <Container
                alignHorizontal={AlignHorizontal.Center}
                alignVertical={AlignVertical.Stretch}
                orientation={Orientation.Horizontal}
                backgroundColor={BackgroundColor.Lightest}
                borderRadius={Amount.Least}
                marginBottom={Amount.Less}
                padding={Amount.Least}
                opacity={isDragActive ? 50 : 100}
              >
                {previewImages.map((image, index) => (
                  <Container key={index} margin={Amount.Least}>
                    <CloseButton
                      onClick={() =>
                        setImages(files =>
                          files?.filter((e, index_) => index_ !== index),
                        )
                      }
                      position={Position.Absolute}
                      positionRight={-7}
                      positionTop={-7}
                    />

                    <Image
                      alt="preview"
                      borderRadius={Amount.Least}
                      // fadeIn
                      key={index}
                      height={70}
                      width={70}
                      url={image.url}
                    />
                  </Container>
                ))}
              </Container>
            ) : (
              <Icon
                marginBottom={Amount.Less}
                name={icon?.name ?? BasicIcons.FileUpload}
                size={Size.Default}
                {...icon}
              />
            )}

            <Container alignVertical={AlignVertical.Center}>
              <Label marginBottom={Amount.Least} textSize={TextSize.Small}>
                {dragLabel}
              </Label>

              {button && (
                <Button
                  onClick={open}
                  form="null"
                  lineHeight={Size.Small}
                  textSize={TextSize.Small}
                  type={button.type ?? ButtonType.Primary}
                  {...button}
                >
                  {buttonLabel}
                </Button>
              )}
            </Container>
          </Container>
        </Container>
      </>
    );
  },
);
