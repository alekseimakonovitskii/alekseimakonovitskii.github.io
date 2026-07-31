import { Flex, Text, Input } from '@chakra-ui/react';

type FieldRowProps = {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (v: string) => void;
};

function FieldRow(props: FieldRowProps) {
    const { label, value, placeholder, onChange } = props;

    return (
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
                {label}
            </Text>
            <Input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                size="sm"
                width="200px"
                textAlign="left"
            />
        </Flex>
    );
}

export default FieldRow;
