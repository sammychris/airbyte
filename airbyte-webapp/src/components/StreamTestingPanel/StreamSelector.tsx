import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { capitalize } from "lodash";

import { ListBox, ListBoxControlButtonProps } from "components/ui/ListBox";
import { Text } from "components/ui/Text";

import { useConnectorBuilderState } from "services/connectorBuilder/ConnectorBuilderStateService";

import styles from "./StreamSelector.module.scss";

interface StreamSelectorProps {
  className?: string;
}

const ControlButton: React.FC<ListBoxControlButtonProps<string>> = ({ selectedOption }) => {
  return (
    <>
      <Text as="h1" size="sm">
        {selectedOption.label}
      </Text>
      <FontAwesomeIcon className={styles.arrow} icon={faSortDown} />
    </>
  );
};

export const StreamSelector: React.FC<StreamSelectorProps> = ({ className }) => {
  const { streams, selectedStream, setSelectedStream } = useConnectorBuilderState();
  const options = streams.map((stream) => {
    return { label: capitalize(stream.name), value: stream.name };
  });

  return (
    <ListBox
      className={classNames(className, styles.centered)}
      options={options}
      selectedValue={selectedStream.name}
      onSelect={setSelectedStream}
      buttonClassName={styles.button}
      controlButton={ControlButton}
    />
  );
};
