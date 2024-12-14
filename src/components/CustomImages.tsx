import Image from 'next/image';

const CustomImage = (props: any) => {
    return (
        <div className="relative my-4" style={{ width: props.width, height: props.height }}>
        <Image
          {...props}
          className={`rounded-lg ${props.className || ''}`}
          width={Number(props.width)}
          height={Number(props.height)}
          alt={props.alt || ''}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    );
  };
  
  export default CustomImage;
